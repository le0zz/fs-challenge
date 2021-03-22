import { SimpleConsoleLogger } from "typeorm";
import { Controller, Get, Options, Param, Post, Query } from "@nestjs/common";
import { throws } from "assert";
import { OverdueCustomerService } from "./overdue-customer.service";

@Controller('overdueCustomers')
export class OverdueCustomerController {

  constructor(
    private readonly overdueCustomerService: OverdueCustomerService
  )
  {

  }

  @Get()
  async getAll(
    @Query('search') search: string
    )
    {
      const items = await this.overdueCustomerService.getOverdueCustomersContaining(search);
      return {
        items: items
      }
    }
  

  @Get('/metadata')
  async getMetadata()
  {
    return {
      version: 1,
      title: 'Clientes Inadimplentes',
      fields: [
        { property: 'id', key: true, disabled: true, hidden: true },
        { property: 'name'},
        { property: 'email'},
        { property: 'amount'},
        { property: 'since'}
      ],
      keepFilters: true
    }
  }

}