import { Body, Controller, Param, Post, Req, UnauthorizedException } from '@nestjs/common';
import { LoginRequest } from './login.request';
import { AuthService } from '../../services/auth/auth.service';
import { FirebaseService } from '../../../../../common/services/firebase/firebase.service';
import { UserRepository } from '../../../../../common/repositories/user.repository';

@Controller('login')
export class LoginController {

    constructor(private firebaseService: FirebaseService,
                private authService: AuthService,
                private userRepository: UserRepository) {
    }

    @Post()
    async login(@Body() loginRequest: LoginRequest) {
        const firebaseUser = await this.firebaseService.validateUser(loginRequest.token);
        if (!firebaseUser) {
            throw new UnauthorizedException();
        }
        const user = await this.userRepository.findOrCreate(firebaseUser.uid, firebaseUser.email, firebaseUser.photoURL);
        const str = await this.authService.login(user);
        return {
            token: str.toString(),
            stoken: user.token_key,
        };
    }
}
