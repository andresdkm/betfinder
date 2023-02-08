import { CacheModule, Logger, Module } from '@nestjs/common';
import { CommonModule } from '../../../common/common.module';
import { BookController } from './controllers/book/book.controller';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from './transform.interceptor';
import { LeagueController } from './controllers/league/league.controller';
import { TokenGuard } from './guards/token.guard';
import { MatchController } from './controllers/match/match.controller';
import { FirebaseService } from '../../../common/services/firebase/firebase.service';
import { FirebaseGuard } from './guards/firebase.guard';
import { UserController } from './controllers/user/user.controller';
import { RedisService } from '../../../common/services/redis/redis.service';
import { BetController } from './controllers/bet/bet.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthConstants } from './services/auth/auth.constants';
import { AuthService } from './services/auth/auth.service';
import { JwtStrategy } from './services/auth/jwt.strategy';
import { HttpExceptionFilter } from './services/exception/http-exception.filter';
import { LoginController } from './controllers/login/login.controller';

@Module({
  controllers: [
    BookController,
    LeagueController,
    MatchController,
    UserController,
    BetController,
    LoginController,
  ],
  imports: [
    CommonModule,
    CacheModule.register(),
    JwtModule.register({
      secret: AuthConstants.secret,
      signOptions: { expiresIn: '36000s' },
    }),
  ],
  providers: [
    Logger,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    AuthService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    JwtStrategy,
  ],
})
export class WebModule {
}
