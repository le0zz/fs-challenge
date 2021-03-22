import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class OverdueCustomer {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  amount: number;

  @Field()
  since: Date

}