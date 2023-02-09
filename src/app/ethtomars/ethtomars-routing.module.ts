import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EthtomarsPageComponent } from './ethtomars-page/ethtomars-page.component';

const routes: Routes = [
  { path: '', component: EthtomarsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EthtomarsRoutingModule { }
