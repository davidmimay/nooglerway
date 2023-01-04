import { Component,Optional } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Auth, getAuth, authState, onAuthStateChanged, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { where, getDocs, addDoc, onSnapshot, collection, collectionData, doc, docData, getDoc, Firestore, increment, orderBy, query, serverTimestamp, updateDoc } from '@angular/fire/firestore';
import { Functions, httpsCallableData, getFunctions, httpsCallable } from '@angular/fire/functions';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent {

  user: any = [];
  item: any = [];
  stripeRole?: string;
  isloading: boolean = false;
  products: any = [];
  invoices: any = [];
  subscriptions: any = [];
  // public userId:any = this.afAuth.auth.currentUser.uid;
  
  constructor(
    @Optional() public auth: Auth,
    private readonly firestore: Firestore,
    private functions: Functions,
    private app: FirebaseApp
  ) {
    this.displayProducts();
    this.checkUserProduct();
    // this.setCurrentUser();
    this.getCustomClaimRole();
  }

  // DISPLAY 2
  /*
  async displayProducts2() {
    
    let collectionRef = collection(this.firestore, 'products', doc.id, 'prices');

    onSnapshot(collectionRef, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log('Id: ', doc.id, 'Data: ', doc.data());
      });
    });
  } 
  */
  
  // ✅ DISPLAY PRODUCTS & PRICES
  async displayProducts() {
    const productRef = query(collection(this.firestore, 'products'), where('active', '==', true));
    const productSnap = await getDocs(productRef);
    const items: any = [];


    productSnap.forEach(async (doc) => {
      const productId = doc.id;
      const product: any = await doc.data();
      // console.log('🛒 PRODUCT:', product);

      const priceRef = query(collection(this.firestore, 'products', productId, 'prices'), where('active', '==', true), orderBy('unit_amount'));
      const priceSnap = await getDocs(priceRef);

      priceSnap.forEach(async (doc) => {
        const priceId = doc.id;
        const price: any = await doc.data();
        // console.log('🛒 PRICE:', price);

        if (price['active'] === true) {
          items.push({
            name: product.name,
            image: product.images[0],
            description: product.description,
            billing_scheme: price['billing_scheme'],
            currency: price['currency'],
            interval: price['interval'],
            price: ((price['unit_amount'] / 100).toFixed(0)),
            priceId,
          });
        }
      });
      this.products = items;  
    });
  }

  // ✅ CHECKOUT
  async checkout(price: string) {
    this.isloading = true // Spinner
    const auth = getAuth();
    const user = auth.currentUser;
    
    const selectedPrice = [{
      price,
      quantity: 1
    }];

    const id = [];
    for (const prod of this.products) {
      id.push({
        price: prod.priceId,
        quantity: 1
      });
    }

    if (user) {
      const uid = user.uid;
      const checkoutRef = await addDoc(collection(this.firestore, 'customers', uid, 'checkout_sessions'), {
        // automatic_tax: true,
        // tax_id_collection: true,
        // tax_rates: [],
        collect_shipping_address: false,
        allow_promotion_codes: true,
        line_items: selectedPrice,
        success_url: `${window.location.origin}/success`,// window.location.href,
        cancel_url: `${window.location.origin}/cancel`,
        metadata: { key: 'value'},
        locale: 'en',
      });
     
      const unsub = onSnapshot(doc(this.firestore, 'customers', uid, 'checkout_sessions', checkoutRef.id), (doc) => {
        const checkout: any = doc.data();
        if (checkout.url) {
          // console.log("Checkout URL: ", checkout.url);
          window.location.assign(checkout.url)
        } else if (checkout.error) {
          // alert(`An error occured: ${checkout.error.message}`);
          console.log("Error: ", checkoutRef.id);
          console.log("Error: ", checkout.error.message);
        }
      });
      // unsub();
    }
  }
    

      // console.log("Checkout: ", subscribeRef.error.message);

      /*
      if (subscribeRef.id) {
        const stripe = Stripe('pk_test_M5NhaXg1IekWjTBASQwigw1q');
        stripe.redirectToCheckout({ subscribeRef.id });
      }
      */
     
      

      /*



      const unsubscribe = onSnapshot(doc(this.firestore, 'customers', uid, 'checkout_sessions', subscribeRef.id),
        //collection(db, "cities"), 
        (snapshot) => {
          // const url = docSnap.data(url)
          // window.location.assign(url);
        },
        (error) => {
          alert(`An error occured: ${error.message}`);
        });


*/


/*
      this.afStore.collection('customers').doc(userId).collection('checkout_sessions').add(checkoutSession)
      
      .then(docRef => {
        // Wait for the CheckoutSession to get attached by the extension
        docRef.onSnapshot((snap) => {
          const { error, url } = snap.data();
          if (error) {
            alert(`An error occured: ${error.message}`);
          } else if (url) {
            window.location.assign(url);
          }
        });
      });
    
    */


        /*
      const unsub = onSnapshot(doc(this.firestore, 'customers', uid, 'checkout_sessions'), (doc) => {
        console.log('Id: ', doc.id, 'Data: ', doc.data());
      });
      */

    
    

      /*
      const unsub = onSnapshot(doc(this.firestore, 'customers', uid, 'checkout_sessions'), (doc) => {
        console.log('Id: ', doc.id, 'Data: ', doc.data());
      });
      */
     /*

      const q = query(collection(this.firestore, 'customers', uid, 'checkout_sessions'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log('Id: ', doc.id, 'Data: ', doc.data());
        });
      });

      */
    
  

/*
  public async subscribe2(price: string) {
    this.isloading = true // Spinner
    const userId = this.afAuth.auth.currentUser.uid;
    const selectedPrice = [{
      price,
      quantity: 1
    }];

    const id = [];
    for (const prod of this.products) {
      id.push({
        price: prod.priceId,
        quantity: 1
      });
    }

    const checkoutSession = {
      // automatic_tax: true,
      // tax_id_collection: true,
      collect_shipping_address: false,
      // tax_rates: environment.taxRates,
      allow_promotion_codes: true,
      line_items: selectedPrice, // id,
      success_url: window.location.href,
      cancel_url: window.location.href,
      metadata: { key: 'value'},
    };

    this.afStore
      .collection('customers')
      .doc(userId)
      .collection('checkout_sessions')
      .add(checkoutSession).then(docRef => {
        // Wait for the CheckoutSession to get attached by the extension
        docRef.onSnapshot((snap) => {
          const { error, url } = snap.data();
          if (error) {
            alert(`An error occured: ${error.message}`);
          } else if (url) {
            window.location.assign(url);
          }
        });
      });
  }

  // Documentation firebase stripe extension
  const docRef = await db
  .collection("${param:CUSTOMERS_COLLECTION}")
  .doc(currentUser.uid)
  .collection("checkout_sessions")
  .add({
    price: "price_1GqIC8HYgolSBA35zoTTN2Zl",
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });
  // Wait for the CheckoutSession to get attached by the extension
  docRef.onSnapshot((snap) => {
    const { error, url } = snap.data();
    if (error) {
      // Show an error to your customer and
      // inspect your Cloud Function logs in the Firebase console.
      alert(`An error occured: ${error.message}`);
    }
    if (url) {
      // We have a Stripe Checkout URL, let's redirect.
      window.location.assign(url);
    }
  });

  */
/*
  // ✅ SET USER DEFAULT DATA
  private setCurrentUser(): void {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;

    uid = {
      uid: '',
      displayName: '',
      priceId: '',
      billing_scheme: '',
      currency: '',
      interval: '',
      price: 0,
      // stripeRole: await getStripeRole(),
    }
    
    // this.userId((firebaseUser) => {
    //   if (firebaseUser) {
    //     //this.userId.uid = firebaseUser.uid;
    //     //this.userId.displayName = firebaseUser.displayName;
    //     this.checkUserProduct();
    //   }
    // });
    
    this.checkUserProduct();
  }
  */
/*
  // ✅ SET USER DEFAULT DATA
  private setCurrentUser2(): void {
    this.userId = {
      uid: '',
      displayName: '',
      priceId: '',
      billing_scheme: '',
      currency: '',
      interval: '',
      price: 0,
      // stripeRole: await getStripeRole(),
    }
    
    this.userId((firebaseUser) => {
      if (firebaseUser) {
        //this.userId.uid = firebaseUser.uid;
        //this.userId.displayName = firebaseUser.displayName;
        this.checkUserProduct();
      }
    });
    
    this.checkUserProduct();
  }
  */

  // ✅ GET USER PRODUCTS
  private checkUserProduct() {
    const auth = getAuth();
    const user = auth.currentUser;
    const items: any = [];
    if (user) {
      const uid = user.uid;
      /*
      const subscriptionRef = query(collection(this.firestore, 'customers', uid, 'subscriptions'), where('status', 'in', ['trialing', 'active']));
      const subscriptionSnap = await getDocs(subscriptionRef);
      const items: any = [];

      subscriptionSnap.forEach(async (doc) => {
        const subscriptionId = doc.id;
        const subscription: any = await doc.data();
        console.log('🛒 SUBSCRIPTION:', subscription);
  */
        
      const subscriptionRef = query(collection(this.firestore, 'customers', uid, 'subscriptions'), where('status', 'in', ['trialing', 'active']));
      const unsubscribe = onSnapshot(subscriptionRef, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const subscription = doc.data();
          console.log('📄 ACTIVE SUBSCRIPTION:', subscription);
          
          /*
          uid.nextPayment = subscription.current_period_end.seconds * 1000;

          const priceData = (await subscription.price.get()).data();
            uid.billing_scheme = priceData.billing_scheme;
            uid.active = priceData.active;
            uid.currency = priceData.currency;
            uid.interval = priceData.interval;
            uid.price = ((priceData.unit_amount / 100).toFixed(0));
            uid.priceId = subscription.price.id;

          const productData = (await subscription.product.get()).data();
            uid.name = productData.name;
            uid.description = productData.description;
*/

          items.push({
            nextPayment: subscription['current_period_end'].seconds * 1000,
            // billing_scheme: subscription.billing_scheme,
            active: subscription['status'],
            currency: subscription['currency'],
            interval: subscription['interval'],
            price: ((subscription['unit_amount'] / 100).toFixed(0)),
            price2: ((subscription['items'][0].plan.amount / 100).toFixed(0)),
            priceId: subscription['price'].id,
          });
          
        });
      });
      this.subscriptions = items; 

    }
  }

    
/*
    const userId = this.afAuth.auth.currentUser.uid;
    const ref = this.afStore.collection('customers').ref;
    ref.doc(userId)
      .collection('subscriptions')
      .where('status', 'in', ['trialing', 'active'])
      .onSnapshot(async (snapshot) => {
        if (snapshot.empty) {
          return;
        }
        // In this implementation we only expect one Subscription to exist
        const subscription = snapshot.docs[0].data();
        // console.log('📄 USER SUBSCRIPTION:', subscription);
          this.userId.nextPayment = subscription.current_period_end.seconds * 1000;

        const priceData = (await subscription.price.get()).data();
          this.userId.billing_scheme = priceData.billing_scheme;
          this.userId.active = priceData.active;
          this.userId.currency = priceData.currency;
          this.userId.interval = priceData.interval;
          this.userId.price = ((priceData.unit_amount / 100).toFixed(0));
          this.userId.priceId = subscription.price.id;

        const productData = (await subscription.product.get()).data();
          this.userId.name = productData.name;
          this.userId.description = productData.description;
      });
      
  }
  */

/*
  // ✅ GET USER SUBSCRIPTION
  // only first subscription is shown.
  private checkUserProduct2() {
    const userId = this.afAuth.auth.currentUser.uid;
    const ref = this.afStore.collection('customers').ref;
    ref.doc(userId)
      .collection('subscriptions')
      .where('status', 'in', ['trialing', 'active'])
      .onSnapshot(async (snapshot) => {
        if (snapshot.empty) {
          return;
        }
        // In this implementation we only expect one Subscription to exist
        const subscription = snapshot.docs[0].data();
        // console.log('📄 USER SUBSCRIPTION:', subscription);
          this.userId.nextPayment = subscription.current_period_end.seconds * 1000;

        const priceData = (await subscription.price.get()).data();
          this.userId.billing_scheme = priceData.billing_scheme;
          this.userId.active = priceData.active;
          this.userId.currency = priceData.currency;
          this.userId.interval = priceData.interval;
          this.userId.price = ((priceData.unit_amount / 100).toFixed(0));
          this.userId.priceId = subscription.price.id;

        const productData = (await subscription.product.get()).data();
          this.userId.name = productData.name;
          this.userId.description = productData.description;
      });
  }
  */

  // ✅ CUSTOMER PORTAL  
  async accessCustomerPortal() {
    this.isloading = true // Spinner
    const region = getFunctions(this.app, 'europe-west2');
    const functionRef = await httpsCallable(region, 'ext-firestore-stripe-subscriptions-createPortalLink'); // TODO: change 'subscriptions' to 'payments'
    await functionRef({ returnUrl: window.location.origin }) // 'window.location.href' to return to same page, or: `${window.location.origin}/account`})
      .then(({ data }: any) => window.location.assign(data.url))
      .catch((error) => console.trace(error.message));  
  }
  
  // ✅ STRIPE ROLES
  // IMPORTANT: at Stripe dashboard/product add metadata field: 'firebaseRole' and example value: 'premium'
  async getCustomClaimRole() {
    const auth = getAuth();
    await auth.currentUser?.getIdToken(true);
    const decodedToken = await auth.currentUser?.getIdTokenResult();
    console.log('👤 USER ROLE:', decodedToken?.claims['stripeRole']);
    this.stripeRole = decodedToken?.claims['stripeRole'];
    return decodedToken?.claims['stripeRole'] || 'free';
  }

}