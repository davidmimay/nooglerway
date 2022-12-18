import { Directive, HostListener, Optional } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';


@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(@Optional() private auth: Auth) {}

  @HostListener('click')
  onclick() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

}
