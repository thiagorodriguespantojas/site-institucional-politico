import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

const mockUser = {
  username: 'admin',
  passwordHash: bcrypt.hashSync('123456', 10),
};

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    if (username === mockUser.username && bcrypt.compareSync(password, mockUser.passwordHash)) {
      return { username };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }
}
