import { Component, Optional } from '@angular/core';
import { Auth, getAuth, authState, onAuthStateChanged, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  public user: Observable<User | null> = EMPTY;
  public url = window.location.origin;

  constructor(
    @Optional() public auth: Auth,
  ) {
    this.user = authState(auth);
  }

  alertCopy() {
     alert(`Link copied 👍`);
  }

}