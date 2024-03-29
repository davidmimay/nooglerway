import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageComponent } from './page/page.component';
import { StoreModule } from '../store/store.module';
import { ActionComponent } from './action/action.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    PageComponent,
    ActionComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule
  ]
})
export class HomeModule { }
