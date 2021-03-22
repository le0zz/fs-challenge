import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OverdueCustomer } from './overdue-customer.entity';
import { v4 as uuid } from 'uuid';

import * as fs from 'fs';

const customers = [
  {
    "name": "NewHorizon Inc",
    "email": "newhorizoninc@gmail.com",
    "amount": 1335.22,
    "since": "2021-01-10T10:30:00Z"
  },
  {
    "name": "BigStar S/A",
    "email": "bigstarsa@gmail.com",
    "amount": 4430.84,
    "since": "2021-01-11T10:30:00Z"
  },
  {
    "name": "Namaste Inc",
    "email": "namasteinc@gmail.com",
    "amount": 770.00,
    "since": "2021-03-05T10:30:00Z"
  },
  {
    "name": "Gshatsu Co",
    "email": "gshatshuco@gmail.com",
    "amount": 9975.10,
    "since": "2020-07-10T10:30:00Z"
  },
  {
    "name": "Internet Inc",
    "email": "internetinc@gmail.com",
    "amount": 114.00,
    "since": "2021-03-06T10:30:00Z"
  },
  {
    "name": "Tele S/A",
    "email": "telesa@gmail.com",
    "amount": 5667.87,
    "since": "2020-07-05T10:30:00Z"
  },
  {
    "name": "Planetary Ltda",
    "email": "planetaryltda@gmail.com",
    "amount": 183.3,
    "since": "2020-11-10T10:30:00Z"
  },
  {
    "name": "Workplace Ltda",
    "email": "workplaceltda@gmail.com",
    "amount": 3409.8,
    "since": "2021-02-10T10:30:00Z"
  },
  {
    "name": "Anchor Holding",
    "email": "anchorholding@gmail.com",
    "amount": 7401.54,
    "since": "2021-01-10T10:30:00Z"
  },
  {
    "name": "Neo Samurai MEI",
    "email": "neosamuraimei@gmail.com",
    "amount": 5463.18,
    "since": "2020-07-10T10:30:00Z"
  },
  {
    "name": "CentralCoast Eirelli",
    "email": "centralcoasteirelli@gmail.com",
    "amount": 5867.15,
    "since": "2020-01-10T10:30:00Z"
  },
  {
    "name": "SweetSpot Ltda",
    "email": "sweetspot@gmail.com",
    "amount": 9676.14,
    "since": "2019-10-10T10:30:00Z"
  },
  {
    "name": "Groove Maker Ltda",
    "email": "groovemaker@gmail.com",
    "amount": 9676.14,
    "since": "2019-10-10T10:30:00Z"
  },
  {
    "name": "Cartoleiro S/A",
    "email": "cartoleiro@gmail.com",
    "amount": 9676.14,
    "since": "2019-10-10T10:30:00Z"
  },
  {
    "name": "Albatroz Company Ltda",
    "email": "albatroz@gmail.com",
    "amount": 9676.14,
    "since": "2019-10-10T10:30:00Z"
  },
  {
    "name": "SweetSpot Ltda",
    "email": "sweetspot@gmail.com",
    "amount": 9676.14,
    "since": "2019-11-10T10:30:00Z"
  },  
  {
    "name": "CentralCoast Eirelli",
    "email": "centralcoasteirelli@gmail.com",
    "amount": 1838.03,
    "since": "2021-03-10T10:30:00Z"
  },
  {
    "name": "BigStar S/A",
    "email": "bigstarsa@gmail.com",
    "amount": 94932.18,
    "since": "2021-02-05T10:30:00Z"
  },
  {
    "name": "SweetSpot Ltda",
    "email": "sweetspot@gmail.com",
    "amount": 9676.14,
    "since": "2019-12-10T10:30:00Z"
  },
  {
    "name": "SilverFox S/A",
    "email": "silverfox@gmail.com",
    "amount": 843.35,
    "since": "2017-06-13T10:30:00Z"
  }
];

@Injectable()
export class OverdueCustomerService implements OnModuleInit {
  constructor(
    @InjectRepository(OverdueCustomer)
    private customerRepo: Repository<OverdueCustomer>
  )
  {

  }

  fillDatabase()
  {    
    var customer;
    customers.forEach((val, i) => {
      customer = this.customerRepo.create({
        id: uuid(),
        name: val.name,
        email: val.email,
        amount: val.amount,
        since: val.since
      });

      this.customerRepo.save(customer);
    })

  }

  async onModuleInit() 
  {
    const docCount = (await this.customerRepo.find()).length;

    if(docCount === 0)
      this.fillDatabase();
  }

  async createCustomer(name, email, amount, since): Promise<OverdueCustomer>
  {
    const customer = this.customerRepo.create({
      id: uuid(),
      name: name,
      email: email,
      amount: amount,
      since: since
    });

    return this.customerRepo.save(customer);

  }

  async getOverdueCustomersContaining(search?: string)
  {
    const customers = await this.customerRepo.find();

    var items = []
    customers.forEach(val => {
      if(search != undefined){
        let found = [];
        
        found.push(val.name.toUpperCase().includes(search.toUpperCase()));
        found.push(val.email.toUpperCase().includes(search.toUpperCase()));
        found.push(val.since.toString().includes(search.toUpperCase()));
        found.push(val.amount.toString().includes(search.toUpperCase()));

        if(!found.includes(true))
          return;
      }

      items.push(val);
    });

    return items;
    
  }

  async getAllOverdueCustomers(): Promise<OverdueCustomer[]>
  {
    return this.customerRepo.find();
  }

}
