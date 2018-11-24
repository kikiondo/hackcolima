import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDYD14A8V-S97zMtYbsi9zcs2RuBnBn12w",
  authDomain: "officefast-6b54a.firebaseapp.com",
  databaseURL: "https://officefast-6b54a.firebaseio.com",
  projectId: "officefast-6b54a",
  storageBucket: "officefast-6b54a.appspot.com",
  messagingSenderId: "402430908375"
}
export const firebaseApp = firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth