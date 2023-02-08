import { CacheInterceptor, CacheKey, CacheTTL, Injectable, Logger, UseInterceptors } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { RedisService } from '../redis/redis.service';
import { FirebaseModel } from '../../models/firebase.model';
import { UserRepository } from '../../repositories/user.repository';
import { UserModel } from '../../models/user.model';
import * as fs from "fs";

@Injectable()
export class FirebaseService {

  private static app: any;

  public static getInstance(): any {
    if (!FirebaseService.app) {
      // @ts-ignore
      const serviceAccount =  JSON.parse(fs.readFileSync('firebase.json'));
      FirebaseService.app = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://winnersure-3bd14.firebaseio.com',
      });
    }
    return FirebaseService.app;
  }

  constructor(private logger: Logger,
              private userRepository: UserRepository) {
    FirebaseService.getInstance();
  }

  async validateUser(token: string): Promise<FirebaseModel> {
    let user: FirebaseModel = null;
    const uid = await admin.auth().verifyIdToken(token, true)
      .then((decodedToken) => {
        return decodedToken.uid;
      }).catch((error) => {
        return null;
      });
    if (uid) {
      await admin.auth().getUser(uid)
        .then((userRecord) => {
          user = userRecord as FirebaseModel;
        })
        .catch((error) => {
          this.logger.error('Error fetching user data:', error);
        });
    }
    return user;
  }
}
