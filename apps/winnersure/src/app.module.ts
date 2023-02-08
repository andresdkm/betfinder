import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectorModule } from './collector/collector.module';
import { CommonModule } from '../../common/common.module';
import { WebModule } from './web/web.module';
import { ConfigService } from '../../common/services/config.service';
import { EventsModule } from './events/events.module';
import { FirebaseService } from '../../common/services/firebase/firebase.service';
import { TokenGuard } from './web/guards/token.guard';
import { FirebaseGuard } from './web/guards/firebase.guard';
import { RedisService } from '../../common/services/redis/redis.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { JwtModule } from '@nestjs/jwt';
import { AuthConstants } from './web/services/auth/auth.constants';
import { AuthService } from './web/services/auth/auth.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    // tslint:disable-next-line:max-line-length
    MongooseModule.forRoot('mongodb+srv://openbets_root:oLpFPCILRA5lnRlI@openbets-3dccz.mongodb.net/openbets?retryWrites=true&w=majority', { useNewUrlParser: true }),
    CollectorModule,
    CommonModule,
    WebModule,
    EventsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../../client/dist/argon-design-system-angular/'),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    FirebaseService,
    TokenGuard,
    FirebaseGuard,
    RedisService,
  ],
  exports: [],
})
export class AppModule {
}
