import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

//   user: any = {};
//   //message: string;


//   constructor(
//     // private afAuth: AngularFireAuth,
//   ) {
    
//     this.getProfile();
//   }

  ngOnInit() {
  console.log('HELLO')
  }

//   getProfile(){
//     // angular fire
//     console.log('HELLO')
//     // const userId = this.afAuth.currentUser;
//     // console.log('UID:', userId)
//     // firebase
//     // let userId = firebase.auth().currentUser.uid;


//     //let user = firebase.auth()//.Auth.currentUser.uid;
//     //let userId = user.currentUser.uid;
//     //let useruid = firebase.auth.Auth.currentUser: firebase.User | null
//     /*

//     firebase.firestore().collection('customers').doc(userId).get().then((documentSnapshot) => {

//       this.user = documentSnapshot.data();
//       // this.user.displayName = this.user.firstName + " " + this.user.lastName;
//       this.user.id = documentSnapshot.id;
//       console.log(this.user);

//     }).catch((error) => {
//       console.log(error);
//     })

//   }

//   update(){

//     this.message = "Updating...";

//     let userId = firebase.auth().currentUser.uid;
//     firebase.firestore().collection('customers').doc(userId).update({
//       // first_name: this.user.displayName.split(' ')[0],
//       // last_name: this.user.displayName.split(' ')[1],
//       hobbies: this.user.hobbies,
//       link: this.user.link,
//       bio: this.user.bio,
//     }).then(() => {

//       this.message = "Bio updated successfully.";

//     }).catch((error) => {
//       console.log(error)
//     })
// */
//   }
  

}