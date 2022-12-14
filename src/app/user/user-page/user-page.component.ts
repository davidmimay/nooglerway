import { Component, Optional } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, authState, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { EMPTY, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  public readonly user: Observable<User | null> = EMPTY;

  constructor(
    @Optional() public auth: Auth
    // public afAuth: AngularFireAuth,
  ) {
    this.user = authState(this.auth);
  }

  alertCopy() {
     alert(`link copied 👍`);
  }
}