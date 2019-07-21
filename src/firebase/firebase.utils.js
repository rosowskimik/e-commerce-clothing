import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCSW-vq3pHaXAQBzmz2ziWfUyKLzYLYljM',
  authDomain: 'e-cloth-db.firebaseapp.com',
  databaseURL: 'https://e-cloth-db.firebaseio.com',
  projectId: 'e-cloth-db',
  storageBucket: '',
  messagingSenderId: '731139717664',
  appId: '1:731139717664:web:cbccb68c413a67cb'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
