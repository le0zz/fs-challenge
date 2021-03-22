import { Inject } from "@nestjs/common";
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { OverdueCustomerService } from "../overdue-customer.service";
import { OverdueCustomer } from "./overdue-customer.type";

@Resolver(of => OverdueCustomer)
export class OverdueCustomerResolver {

  constructor(
    private customerService: OverdueCustomerService
  )
  {

  }

  @Query(returns => OverdueCustomer)
  overdueCustomers()
  {
    return {
      id: '1231231',
      name: 'Teste 123',
      email: 'mymail@gmail.com',
      amount: 1160.33,
      since: new Date(),
    }
  }

  @Mutation(returns => OverdueCustomer)
  createCustomer(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('amount') amount: number,
    @Args('since') since: Date,
  )
  {
    return this.customerService.createCustomer(name, email, amount, since);
  }

}