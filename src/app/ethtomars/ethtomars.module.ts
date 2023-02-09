import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EthtomarsRoutingModule } from './ethtomars-routing.module';
import { EthtomarsPageComponent } from './ethtomars-page/ethtomars-page.component';


@NgModule({
  declarations: [
    EthtomarsPageComponent
  ],
  imports: [
    CommonModule,
    EthtomarsRoutingModule
  ]
})
export class EthtomarsModule { }
