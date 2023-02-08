import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config.service';
import * as redis from 'redis';
import * as admin from 'firebase-admin';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({})
export class RedisService {

  private static pub: redis.RedisClient;

  public static getInstance(config): redis.RedisClient {
    if (!RedisService.pub) {
      RedisService.pub = redis.createClient(
        {
          port: config.getNumber('REDIS_PORT'),
          host: config.get('REDIS_HOST'),
          password: config.get('REDIS_PASSWORD'),
        },
      );
    }
    return RedisService.pub;
  }

  constructor(private config: ConfigService) {
  }

  removeKey(name: string) {
    RedisService.getInstance(this.config).del('name', () => {

    });
  }

  isKey(name: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      RedisService.getInstance(this.config).get(name, (error, data) => {
        resolve(data != null);
      });
    });
  }

  getKey(name: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      RedisService.getInstance(this.config).get(name, (error, data) => {
        resolve(JSON.parse(data));
      });
    });
  }

  setKey(name: string, data): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      RedisService.getInstance(this.config).set(name, JSON.stringify(data), () => {
        RedisService.getInstance(this.config).expire(name, 10800, () => {
          resolve(true);
        });
      });
    });
  }

}
