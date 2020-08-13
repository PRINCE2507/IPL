import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyCX3wnbi5cdGQikDPdFHXQi3MUSOKceauw",
  authDomain: "ipl-test-45026.firebaseapp.com",
  databaseURL: "https://ipl-test-45026.firebaseio.com",
  projectId: "ipl-test-45026",
  storageBucket: "ipl-test-45026.appspot.com",
  messagingSenderId: "423766703798",
  appId: "1:423766703798:web:9eb1218ae5c98a18fa3017",
  measurementId: "G-0MNMJXSKHQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
export {
    firebase,
    firebaseMatches,
    firebasePromotions
}