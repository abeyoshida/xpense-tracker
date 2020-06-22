import * as firebase from 'firebase';  // adds all the named exports from the Firebase database and attaches them to firebase const

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL, 
    // dev: 'https://expensify-e8c07.firebaseio.com',  
    // test: 'https://expensify-test-92579.firebaseio.com'
    // process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASURMENT_ID
  };
console.log('firebase.js firebaseConfig: ', firebaseConfig);
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const fdb = firebase.database();
  export { firebase, fdb as default};


  /****************************************

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCEMeKJtfQpFbAS-OLZgAlc8e-xqnAdCPg",
    authDomain: "expensify-e8c07.firebaseapp.com",
    databaseURL: "https://expensify-e8c07.firebaseio.com",
    projectId: "expensify-e8c07",
    storageBucket: "expensify-e8c07.appspot.com",
    messagingSenderId: "366366138555",
    appId: "1:366366138555:web:edeab1510ac1f5f307499e",
    measurementId: "G-Z7MJ5K4DTF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

******************************************/