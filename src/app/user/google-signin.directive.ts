import { Directive, HostListener, Optional } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';
import { Auth, authState, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';


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
