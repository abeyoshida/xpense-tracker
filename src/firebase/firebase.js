import * as firebase from 'firebase';  // adds all the named exports from the Firebase database and attaches them to firebase const

const env = 'test';  // 'test' or 'dev'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: (env === 'dev') ? 'https://expensify-e8c07.firebaseio.com' : 'https://expensify-test-92579.firebaseio.com',  // process.env.FIREBASE_DATABASE_URL, 
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASURMENT_ID
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const fdb = firebase.database();
  export { firebase, fdb as default};
