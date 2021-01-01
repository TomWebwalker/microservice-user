import { Controller, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

interface LoginHttpRequest {
  body: { email: string; password: string };
}

interface RegisterHttpRequest {
  body: { email: string; password: string; name: string };
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Request() req: LoginHttpRequest): Promise<UserEntity> {
    const { email, password } = req.body;
    return this.userService.findByEmailAndPassword(email, password);
  }

  @Post('register')
  async register(@Request() req: RegisterHttpRequest): Promise<UserEntity> {
    return this.userService.create(req.body);
  }
}
