import { Component } from '@angular/core';
import { SeoService } from 'src/app/shared/seo.service';
import { getDocs, where, addDoc, collection, collectionData, doc, docData, getDoc, Firestore, increment, orderBy, query, serverTimestamp, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-helpers',
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.scss']
})
export class HelpersComponent {

  title = 'Helpers';
  description = 'People supporting the project';
  customers = null;
  subscription: any;

  constructor(
    private seo: SeoService,
    private firestore: Firestore,
  ) {}

  ngOnInit() {

    this.seo.generateTags({
      title: this.title,
      description: this.description,
    });

    // this.customers = this.db.collection('customers').valueChanges({ idField: 'id' });
    // this.subscribeToCustomers();

  }

  /*
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }*/

  /*
  subscribeToCustomers() {
    if (!this.customers) {
      this.subscription = this.firestore.collection('customers').valueChanges({idField: 'id'})
      .subscribe(customers =>  {
        this.customers = customers;
      });
    }
  }

  getCustomer(id: string) {
    if (this.customers) {
      const cached = this.customers.find(v => v.id === id);
      console.log('use cached');
      return of(cached);
    } else {
      console.log('use db');
      return this.firestore.collection('customers').doc(id).valueChanges();
    }
  }

  dispose() {
    this.subscription.unsubscribe();
    this.customers = null;
  }
  */
}