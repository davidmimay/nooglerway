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

  // public readonly testDocValue$: Observable<any>;

  constructor(
    private readonly firestore: Firestore,
    @Optional() public auth: Auth
  ) {
    this.getProfile();
    //this.user = authState(this.auth);



/*
    const ref = collection(firestore, 'customers');
    const userId = this.user.uid;
    // const ref = doc(firestore, 'customers');
    // await setDoc(doc(citiesRef, "SF"), {

    this.testDocValue$ = docData(ref).pipe(

    //this.testDocValue$ = docData(ref).pipe(
      traceUntilFirst('firestore')
    );
    */

    /*
    const animalsCollection = collection(firestore, 'customers').withConverter<Customers>({
      fromFirestore: snapshot => {
        const { name, upboats } = snapshot.data();
        const { id } = snapshot;
        const { hasPendingWrites } = snapshot.metadata;
        return { id, name, upboats, hasPendingWrites };
      },
      // TODO unused can we make implicit?
      toFirestore: (it: any) => it,
    });
    */


    
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
      console.log("Document data:", docSnap.data());
    } else {
      console.log("getProfile() | No document");
      return;
    }
  }

  // NEW 2
  /*
  actualizarPerfil(displayName:string, photoURL?: string){
    return updateProfile(this.userData,{
      displayName,
      photoURL
    });
  }
  */

  /*
  async updateProfile(){
    this.message = "Updating...";

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      updateProfile(auth.currentUser, {
        displayName: user.displayName,
        photoURL: user.photoURL
      }).then(() => {
        this.message = "Updated.";
      }).catch((error) => {
        console.log(error)
      });
    } else {
      console.log("updateProfile() | No user");
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
        this.message = "Updated.";
      }).catch((error) => {
        console.log(error)
      })
      
    } else {
      console.log("update() | No user");
      return;
    }
  }
*/
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