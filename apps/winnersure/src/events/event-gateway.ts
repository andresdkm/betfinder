import {
  ConnectedSocket,
  MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client, Server, Socket } from 'socket.io';
import { Logger, UseFilters, UseGuards } from '@nestjs/common';
import { FirebaseService } from '../../../common/services/firebase/firebase.service';
import { RoomService } from '../../../common/services/room/room.service';
import { BetRepository } from '../../../common/repositories/bet.repository';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../../../common/repositories/user.repository';

@WebSocketGateway()
export class EventGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  constructor(private logger: Logger,
              private userRepository: UserRepository,
              private roomService: RoomService,
              private betRepository: BetRepository) {
  }

  private sendErrorMessage(client: Socket, message: string) {
    client.emit('error', message);
  }

  @WebSocketServer() server: Server;

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity(@ConnectedSocket() client: Socket, @MessageBody() data: string): Promise<boolean> {
    this.logger.debug(data);
    const user = await this.userRepository.findOne({ token_key: data });
    if (!user) {
      this.logger.debug('user_not_found');
      return false;
    }
    const isConnected = this.roomService.verifyUid(user._id);
    if (isConnected) {
      this.logger.debug('user_already_connect');
      return false;
    }
    const result = this.roomService.joinSocket(user._id, client);
    return true;
  }

  @SubscribeMessage('load')
  async loadBets(@ConnectedSocket() client: Socket, @MessageBody() data: string): Promise<any> {
    if (!this.roomService.isSocketAuth(client)) {
      client.disconnect();
      return null;
    }
    const bets = await this.betRepository.getBets();
    client.emit('bets', bets);
    return true;
  }

  @SubscribeMessage('like')
  async like(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {
    const bet = await this.betRepository.findById(data._id);
    if (bet) {
      if (!bet.likes) {
        bet.likes = 0;
      }
      bet.likes += data.like;
      await this.betRepository.save(bet);
      await this.roomService.notify('update_bet', bet);
    }
  }

  @SubscribeMessage('get')
  async get(@ConnectedSocket() client: Socket, @MessageBody() data: any): Promise<any> {
    const bet = await this.betRepository.getBetById(data);
    if (bet && bet.length > 0) {
      await this.roomService.notify('load_bet', bet[0]);
    }
  }

  afterInit(server: Server) {
    this.logger.debug('Init');
    this.roomService.setServer(this.server);
  }

  handleDisconnect(client: Socket) {
    this.roomService.leaveSocket(client)
      .then(response => {
        this.logger.log(`Client disconnected: ${client.id}`);
      });
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

}
