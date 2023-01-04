import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

// Components
import { BioComponent } from './bio/bio.component';
import { UserPageComponent } from './user-page/user-page.component';
import { GoogleSigninDirective } from './google-signin.directive';
import { UpgradeComponent } from './upgrade/upgrade.component';

@NgModule({
  declarations: [
    BioComponent,
    UserPageComponent,
    GoogleSigninDirective,
    UpgradeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
