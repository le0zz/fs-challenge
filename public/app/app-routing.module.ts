import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverdueCustomersComponent } from './overdue-customers/overdue-customers.component';


const routes: Routes = [
  {
    path: '', 
    component: OverdueCustomersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
