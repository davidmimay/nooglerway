import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { SharedModule } from '../shared/shared.module';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    CatalogueComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule
  ]
})
export class StoreModule { }
