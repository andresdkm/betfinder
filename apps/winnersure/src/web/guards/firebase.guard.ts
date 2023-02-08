import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Md5 } from 'md5-typescript';
import { FirebaseService } from '../../../../common/services/firebase/firebase.service';

@Injectable()
export class FirebaseGuard implements CanActivate {


  constructor(private firebaseService: FirebaseService) {
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const params = request.query;
    if (params && params.token) {
      return this.firebaseService.validateUser(params.token)
        .then(response => {
          return response != null;
        });
    }
    return false;
  }
}
