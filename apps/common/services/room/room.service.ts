import { Injectable } from '@nestjs/common';
import { RedisService } from '../redis/redis.service';
import { Logger } from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@Injectable()
export class RoomService {

  private whiteList: any;
  private clients: any;
  private server: Server;

  constructor(private logger: Logger) {
    this.whiteList = {};
    this.clients = {};
  }

  setServer(server: Server) {
    this.server = server;
  }

  isSocketAuth(client: Socket) {
    return this.whiteList[client.id] != null;
  }

  getSocket(server: Server) {
    const sockets = server.sockets.sockets;
    for (let socketId in sockets) {
      this.logger.debug(socketId, 'clients');
    }
  }

  verifyUid(uid: string) {
    return this.clients[uid] != null;
  }

  joinSocket(uid: string, socket: Socket) {
    if (this.clients[uid]) {
      return false;
    }
    socket.join('premium_bets');
    this.clients[uid] = socket.id;
    this.whiteList[socket.id] = true;
    return true;
  }

  async leaveSocket(socket: Socket) {
    for (let prop in this.clients) {
      if (this.clients[prop] == socket.id) {
        delete this.whiteList[socket.id];
        delete this.clients[prop];
        break;
      }
    }
    return true;
  }

  async notify(event: string, data: any) {
    if (this.server) {
      return this.server.to('premium_bets').emit(event, data);
    }
  }

}
