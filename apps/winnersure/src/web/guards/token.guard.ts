import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from '../../../../common/services/config.service';
import { Md5 } from 'md5-typescript';

@Injectable()
export class TokenGuard implements CanActivate {
  private key: string;

  constructor(private logger: Logger,
              private configService: ConfigService) {
    this.key = configService.get('KEY');
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const params = request.query;
    if (params && params.key && params.date) {
      const token = Md5.init(params.date + ':' + this.key).toString();
      if (token === params.key) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}
