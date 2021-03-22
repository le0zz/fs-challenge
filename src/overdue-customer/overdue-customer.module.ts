import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OverdueCustomer } from './overdue-customer.entity';
import { OverdueCustomerResolver } from './websocket/overdue-customer.resolver';
import { OverdueCustomerService } from './overdue-customer.service';
import { OverdueCustomerController } from './overdue-customer.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([OverdueCustomer])
  ],
  providers: [
    OverdueCustomerResolver,
    OverdueCustomerService
  ],
  controllers: [OverdueCustomerController]
})
export class OverdueCustomerModule {}
