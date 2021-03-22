import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OverdueCustomer } from './overdue-customer/overdue-customer.entity';

import { OverdueCustomerModule } from './overdue-customer/overdue-customer.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { ormConfig } from './database/config/ormconfig';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormConfig()),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    OverdueCustomerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
