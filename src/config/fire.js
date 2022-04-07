import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyABHkqbPuJN1BxCtcZ4ktCXusKowvQT8ak",
  authDomain: "fesshr-app.firebaseapp.com",
  databaseURL: "https://fesshr-app.firebaseio.com",
  projectId: "fesshr-app",
  storageBucket: "fesshr-app.appspot.com",
  messagingSenderId: "596008514662",
  appId: "1:596008514662:web:2e90be64efc0df619f69a7"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
