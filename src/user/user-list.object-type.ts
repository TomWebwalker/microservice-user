import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export abstract class UserList {
  @Field(() => [User])
  rows: User[];

  @Field(() => Int)
  count: number;
}
