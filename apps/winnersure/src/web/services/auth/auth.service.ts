import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from '../../../../../common/models/user.model';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {
    }

    async login(user: UserModel) {
        const payload = { id: user._id, email: user.email };
        return this.jwtService.sign(payload);
    }
}
