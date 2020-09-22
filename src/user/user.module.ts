import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';
import { userProviders } from './user.provider';
import { UserResolver } from './user.resolver';

@Module({
  imports: [DatabaseModule],
  exports: [UserService],
  providers: [UserService, ...userProviders, UserResolver],
})
export class UserModule {}
