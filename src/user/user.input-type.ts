import { Field, InputType } from '@nestjs/graphql';
import { UserEntity } from './user.entity';

@InputType()
export class UserInput implements UserEntity {

    @Field()
    name: string;
    
    @Field()
    email: string;

    @Field()
    password: string;
}