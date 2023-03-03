import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MalamakaiRoutingModule } from './malamakai-routing.module';
import { OceanComponent } from './ocean/ocean.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OceanComponent
  ],
  imports: [
    CommonModule,
    MalamakaiRoutingModule,
    SharedModule
  ],
  exports: [
    OceanComponent
  ]
})
export class MalamakaiModule { }
