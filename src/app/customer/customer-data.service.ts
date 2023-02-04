import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { addDoc, collection, where, collectionData, doc, onSnapshot, docData, getDoc, Firestore, increment, orderBy, query, serverTimestamp, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  customers: any = null;
  subscription: any;

  constructor (
    private readonly firestore: Firestore,
  ) {}

  // subscribeToCustomers() {
  //   if (!this.customers) {
  //     this.subscription = this.firestore.collection('customers').valueChanges({idField: 'id'})
  //     .subscribe(customers =>  {
  //       this.customers = customers;
  //     });
  //   }

  // }
/*
  async displayCustomers() {
    const customerRef = query(collection(this.firestore, 'customers'));
    const customerSnap = onSnapshot(customerRef, (querySnapshot) => {
      const cities: any = [];
      querySnapshot.forEach((doc) => {
          cities.push(doc.data().name);
      });
      console.log("Current customers: ", cities.join(", "));
    });
  }


  const unsub = onSnapshot(doc(firestore, "cities", "SF"), (doc) => {
    const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    console.log(source, " data: ", doc.data());
  });


  getCustomer(id: string) {
    if (this.customers) {
      const cached = this.customers.find(v => v.id === id);
      console.log('use cached');
      return of(cached);
    } else {
      console.log('use db');
      return this.db.collection('customers').doc(id).valueChanges();
    }

  }

  dispose() {
    this.subscription.unsubscribe();
    this.customers = null;
  }

  */


}
