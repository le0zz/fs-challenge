import { Component, OnInit } from '@angular/core';
import { PoPageDynamicTableField } from '@po-ui/ng-templates';

@Component({
  selector: 'app-overdue-customers',
  templateUrl: './overdue-customers.component.html',
  styleUrls: ['./overdue-customers.component.css']
})
export class OverdueCustomersComponent implements OnInit {

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true, visible: false },
    { property: 'name', label: 'Nome'},
    { property: 'amount', label: 'Valor'},
    { property: 'since', label: 'Desde', type: 'date'}
  ];

  constructor() { }

  ngOnInit(): void
  {
    
  }

}
