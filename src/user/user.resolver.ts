import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserList } from './user-list.object-type';
import { UserInput } from './user.input-type';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => UserList, { nullable: true })
  async users(): Promise<UserList> {
    return this.userService.findAll();
  }

  @Mutation(returns => User)
  async create(@Args('user') user: UserInput): Promise<User> {
    return this.userService.create(user);
  }

  @Mutation(returns => User)
  async update(@Args('user') user: UserInput): Promise<User> {
    return this.userService.update(user);
  }

  @Mutation(returns => Boolean)
  async delete(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<boolean> {
    return this.userService.delete(id);
  }
}
