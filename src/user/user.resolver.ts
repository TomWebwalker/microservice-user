import { Query, Resolver } from '@nestjs/graphql';
import { UserList } from './user-list.object-type';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => UserList, { nullable: true })
  async users(): Promise<UserList> {
    return this.userService.findAll();
  }
}
