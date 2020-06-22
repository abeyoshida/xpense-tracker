import * as firebase from 'firebase';  // adds all the named exports from the Firebase database and attaches them to firebase const

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

// // child removed event
  // fdb.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log('child_removed event:\n', snapshot.key, snapshot.val());
  // });

  // // child changed event
  // fdb.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log('child_changed event:\n', snapshot.key, snapshot.val());
  // });

  // // child added event
  // fdb.ref('expenses').on('child_added', (snapshot) => {
  //   console.log('child_added event:\n', snapshot.key, snapshot.val());
  // });

  // fdb.ref('expenses')
  //   .on('value', (snapshot) => {
  //     console.log('expenses snapshot:\n', snapshot.val());
  //     const expenses = [];
  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  //     console.log('expenses snapshot converted to array: \n', expenses);
  //   });
 
  // fdb.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //       console.log(snapshot.val());
  //       const expenses = [];
  //       snapshot.forEach((childSnapshot) => {
  //           expenses.push({
  //               id: childSnapshot.key,
  //               ...childSnapshot.val()
  //           });
  //       });
  //       console.log(expenses);
  //   });

  // description, notes, amount createdAt
//   fdb.ref('expenses').push({
//     description: 'Mortgage',
//     notes: '',
//     amount: '130000',
//     createdAt: 987987987988
//   });
//   fdb.ref('expenses').push({
//     description: 'Aeroponics',
//     notes: 'Pump',
//     amount: '10000',
//     createdAt: 987987987988
//   });
  // fdb.ref('expenses').push({
  //   description: 'Groceries',
  //   notes: 'Meat and Vegetables',
  //   amount: '4500',
  //   createdAt: 987987987988
  // });

  //   fdb.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company} and is stressed at ${val.stressLevel}`);
//   });

//   setTimeout(() => {
//     fdb.ref('name').set('Abe');
//   }, 3500);

//   setTimeout(() => {
//     fdb.ref('stressLevel').set(4);
//   }, 7000);

  //   fdb.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log('fdb values: ', val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data: ', e);
//     });

// fdb.ref().set({
//     name: 'Abner Whatchoo',
//     age: 67,
//     isSingle: false,
//     location: {
//         city: 'New York City',
//         country: 'United States'
//     },
//     stressLevel: 6,
//     job: {
//         title: 'bundler',
//         company: 'Google'
//     }
// }).then(() => {
//     console.log('1 data has been saved');
// }).catch((e) => {
//     console.log('1 database failure, ', e);
// });

// fdb.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon'
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('2 data has been updated');
// }).catch((e) => {
//     console.log('2 database failure, ', e);
// });

// fdb.ref()
//     .remove()
//     .then(() => {
//         console.log('isSingle has been removed');
//     })
//     .catch((e) => {
//         console.log('the remove request for isSingle failed: ', e)
//     });