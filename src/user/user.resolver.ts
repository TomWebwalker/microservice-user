import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaginationInput } from '../common/pagination.input-type';
import { UserList } from './user-list.object-type';
import { UserInput } from './user.input-type';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserList, { nullable: true })
  async users(
    @Args('pagination') pagination: PaginationInput,
  ): Promise<UserList> {
    return this.userService.query(pagination);
  }

  @Mutation(() => User)
  async create(@Args('user') user: UserInput): Promise<User> {
    return this.userService.create(user);
  }

  @Mutation(() => User)
  async update(
    @Args('user') user: UserInput,
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<User> {
    return this.userService.update({ ...user, id });
  }

  @Mutation(() => Boolean)
  async delete(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<boolean> {
    return this.userService.delete(id);
  }
}
