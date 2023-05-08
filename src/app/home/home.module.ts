import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
<<<<<<< HEAD
import { HomePageComponent } from './home-page/home-page.component';
=======
import { PageComponent } from './page/page.component';
>>>>>>> update
import { StoreModule } from '../store/store.module';
import { ActionComponent } from './action/action.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
<<<<<<< HEAD
    HomePageComponent,
=======
    PageComponent,
>>>>>>> update
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
