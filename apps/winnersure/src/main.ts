import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '../../common/services/config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'warn', 'debug', 'log'],
  });
  app.setGlobalPrefix('api');
  app.enableCors();
  const config = new ConfigService(`.env`);
  await app.listen(config.getNumber('SERVICE_PORT'));
}
bootstrap();
