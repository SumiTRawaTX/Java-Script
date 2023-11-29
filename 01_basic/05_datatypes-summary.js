// primitive 

// 7 types : String, Number, Boolean, Null, undefined, Symbols, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail; // basic


const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);


// Reference (Non primitive)
// Array, Objects, Function

const heros = ["shaktimaan", "naagraj", "doga"];// array

//object
let myObj = {
    name: "sumit",
    age: 20,
}

// function by treating in variable
const myFunction = function () {
    console.log("hello world");
}
myFunction();
