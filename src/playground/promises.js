
// create a promise and pass in a long running asynchronous task 
// when it's done one of two functions gets called -- resolve or reject
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Abram',
            age: 67 
        });
        reject('wrong bong gong');
    }, 5000);
    
});

console.log('before');
// then() allows us to register a callback function that gets called 
// when and if the promise resolves
// catch() allows us to register a callback function that gets called
// when and if the promise fails and is rejected
promise.then((data) => {
    console.log('1 promise data: ', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is the 2nd promise');
            reject('wrong bong gong');
        }, 5000);
        
    });
}).then((str) => {
    console.log('2 promise: ', str);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');