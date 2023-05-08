import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OceanComponent } from './ocean/ocean.component';
import { ActionComponent } from './action/action.component';
import { SharedModule } from '../shared/shared.module';
import { HelpersComponent } from './helpers/helpers.component';
import { PageComponent } from './page/page.component';
import { MalamakaiRoutingModule } from './malamakai-routing.module';

@NgModule({
  declarations: [
    OceanComponent,
    ActionComponent,
    HelpersComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    MalamakaiRoutingModule,
    SharedModule
  ],
  exports: [
    OceanComponent,
    ActionComponent
  ]
})
export class MalamakaiModule { }
