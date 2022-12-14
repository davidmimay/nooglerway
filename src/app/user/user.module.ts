import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

// Components
import { BioComponent } from './bio/bio.component';
import { UserPageComponent } from './user-page/user-page.component';
import { GoogleSigninDirective } from './google-signin.directive';

@NgModule({
  declarations: [
    BioComponent,
    UserPageComponent,
    GoogleSigninDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
