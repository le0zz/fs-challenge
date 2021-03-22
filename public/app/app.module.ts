import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverdueCustomersComponent } from './overdue-customers/overdue-customers.component';
import { PoModule } from '@po-ui/ng-components';
import { PoLoadingOverlayComponent } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
  declarations: [
    AppComponent,
    OverdueCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent, PoLoadingOverlayComponent]
})
export class AppModule { }
