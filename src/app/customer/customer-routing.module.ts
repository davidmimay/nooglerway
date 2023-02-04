import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPageComponent } from './customer-page/customer-page.component';
const routes: Routes = [
  // { path: '', component: ListPageComponent },
  { path: ':id', component: CustomerPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
