import { Directive, HostListener, Optional } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithRedirect } from '@angular/fire/auth';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(@Optional() private auth: Auth) {}

  @HostListener('click') onclick() {
    // ℹ️ https://firebase.google.com/docs/auth/web/google-signin#web-version-9_4
    const provider = new GoogleAuthProvider()
    // Ask user for google data access
    provider.addScope('https://www.googleapis.com/auth/youtube.readonly')
    // provider.addScope('https://www.googleapis.com/auth/calendar');
    return signInWithRedirect(this.auth, new GoogleAuthProvider());
  }

}
