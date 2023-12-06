// promise creation
// node 16_advanced/02_Promise.js

const promiseOne = new Promise(function(resolve, reject) {
    // do an async task
    // DB class, cryptography, network
    setTimeout(function() {
        console.log('async task is complete');
        resolve();
    }, 1000);
});

// consuming promises

promiseOne.then(function() {
    console.log("promise consumed");
});


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("async task 2");
        resolve();
    }, 2000);
}).then(function() {
    console.log("async 2 resolved")
});

// taking data
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username:"Chai", email:"chai@example.com"})
    }, 3000);
})
promiseThree.then(function(user) {
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            resolve({username:"Sumit", Password:"1234"});
        }
        else {
            reject('ERROR: Something went wrong');
        }
    }, 4000);
});

promiseFour
.then((user) => {
    console.log(user)
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch(function(error) {
    console.log(error);
})
.finally(() => console.log("the promise is either resolved or rejected"));


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username:"javascript", password:"12345"});
        }
        else {
            reject('ERROR: js went wrong');
        }
    }, 5000);
});


//async and await 
async function consumepromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch (error){
        console.log(error)
    }
}

consumepromiseFive();


fetch(`https://jsonplaceholder.typicode.com/users`)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));