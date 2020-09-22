import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export class UserList {
  @Field(type => [User])
  rows: User[];

  @Field(type => Int)
  count: number;
}
