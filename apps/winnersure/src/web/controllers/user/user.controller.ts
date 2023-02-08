import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { TokenGuard } from '../../guards/token.guard';
import { FirebaseGuard } from '../../guards/firebase.guard';
import { FirebaseService } from '../../../../../common/services/firebase/firebase.service';
import { UserRepository } from '../../../../../common/repositories/user.repository';

@Controller('users')
@UseGuards(FirebaseGuard)
export class UserController {

  constructor(private firebasEservice: FirebaseService,
              private userRepository: UserRepository) {
  }

  @Get()
  async me(@Query('token') token) {
  }

}
