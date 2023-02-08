import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './shemas/event.schema';
import { schema } from './shemas/schema';
import { EventRepository } from './repositories/event.repository';
import { BetRepository } from './repositories/bet.repository';
import { BetSchema } from './shemas/bet.schema';
import { BookSchema } from './shemas/book.schema';
import { BookRepository } from './repositories/book.repository';
import { LeagueSchema } from './shemas/league.schema';
import { LeagueRepository } from './repositories/league.repository';
import { MatchSchema } from './shemas/match.schema';
import { MatchRepository } from './repositories/match.repository';
import { ConfigService } from './services/config.service';
import { ApiService } from './services/api.service';
import { UserSchema } from './shemas/user.schema';
import { UserRepository } from './repositories/user.repository';
import { RedisService } from './services/redis/redis.service';
import { FirebaseService } from './services/firebase/firebase.service';
import { RoomService } from './services/room/room.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: schema.events, schema: EventSchema,
      },
      {
        name: schema.bets, schema: BetSchema,
      },
      {
        name: schema.books, schema: BookSchema, collection: 'bookmarkers',
      },
      {
        name: schema.leagues, schema: LeagueSchema, collection: 'bookmarker_leagues',
      },
      {
        name: schema.matches, schema: MatchSchema, collection: 'matches',
      },
      {
        name: schema.users, schema: UserSchema, collection: 'users',
      },
    ]),
  ],
  providers: [
    EventRepository,
    BetRepository,
    BookRepository,
    LeagueRepository,
    MatchRepository,
    UserRepository,
    FirebaseService,
    RedisService,
    {
      provide: ConfigService,
      useValue: new ConfigService(`.env`),
    },
    ApiService,
    Logger,
    RoomService,
  ],
  exports: [
    EventRepository,
    BetRepository,
    BookRepository,
    LeagueRepository,
    MatchRepository,
    UserRepository,
    ConfigService,
    ApiService,
    Logger,
    FirebaseService,
    RedisService,
    RoomService,
  ],
})
export class CommonModule {
}
