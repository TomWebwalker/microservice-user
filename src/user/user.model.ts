import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserEntity } from './user.entity';

@ObjectType()
export class User extends UserEntity {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field()
  email: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
