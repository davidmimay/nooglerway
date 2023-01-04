import { Component, OnInit, Optional } from '@angular/core';
import { Auth, authState, signInAnonymously, getAuth, updateProfile, signOut, User, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { addDoc, collection, collectionData, doc, docData, getDoc, Firestore, increment, orderBy, query, serverTimestamp, updateDoc } from '@angular/fire/firestore';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { traceUntilFirst } from '@angular/fire/performance';

export type Customers = {
  name: string,
  upboats: number,
  id: string,
  hasPendingWrites: boolean,
};

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  user: any = {};
  message: any;

  constructor(
    private readonly firestore: Firestore,
    @Optional() public auth: Auth
  ) {
    this.getProfile();
  }

  ngOnInit() {}
 
  async getProfile(){
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      const docRef = doc(this.firestore, 'customers', uid);
      const docSnap = await getDoc(docRef);
      this.user = docSnap.data();
      console.log("PROFILE:", this.user);
    } else {
      console.log("getProfile() | Null");
      return;
    }
  }

  async update(){
    this.message = "Updating...";

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const uid = user.uid;
      const docRef = doc(this.firestore, 'customers', uid);
      updateDoc(docRef, {        
        hobbies: this.user.tags,
        link: this.user.link,
        bio: this.user.bio,
      }).then(() => {
        this.message = "Updated";
      }).catch((error) => {
        console.log(error)
      })

      /*
      // Update Profile data from Google on Firebase only
      updateProfile(auth.currentUser, {
        displayName: user.displayName,
        photoURL: user.photoURL,
      }).then(() => {
        this.message = "Updated";
      }).catch((error) => {
        console.log(error)
      });
      */

    } else {
      console.log("update() | No user");
      return;
    }
  }

}