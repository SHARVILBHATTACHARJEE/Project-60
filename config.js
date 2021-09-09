import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCysEJ5z2CYlzpsAx0LUES-AmcNxkgypd8",
    authDomain: "pro-60-b31e6.firebaseapp.com",
    databaseURL: "https://pro-60-b31e6-default-rtdb.firebaseio.com",
    projectId: "pro-60-b31e6",
    storageBucket: "pro-60-b31e6.appspot.com",
    messagingSenderId: "274483377969",
    appId: "1:274483377969:web:12f771e0396fb109936210"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.database();
 


 
 

  