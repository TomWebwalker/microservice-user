import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';
import { userProviders } from './user.provider';
import { UserResolver } from './user.resolver';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  exports: [UserService],
  providers: [UserService, ...userProviders, UserResolver],
  controllers: [UserController],
})
export class UserModule {}
