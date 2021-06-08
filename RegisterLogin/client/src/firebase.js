import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBq1uOi6dMVsQVMt-FSuLR-qoTH3NynenQ",
    authDomain: "social-network-6ea99.firebaseapp.com",
    projectId: "social-network-6ea99",
    storageBucket: "social-network-6ea99.appspot.com",
    messagingSenderId: "598415562649",
    appId: "1:598415562649:web:3bb48b07e187601ba2e508"
  };
  // Initialize Firebase
const fire =   firebase.initializeApp(firebaseConfig);

export default firebase;