import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class PaginationInput {
    
    @Field({ defaultValue: 10 })
    limit: number;
    
    @Field({ defaultValue: 0 })
    offset: number;
}