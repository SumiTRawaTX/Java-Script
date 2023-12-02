// node 03_basic/02_functions

// function calculateCartPrice(num1) {
    // return num1;
// }
// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200, 300, 400)); //200

//for accessing all 
function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200, 300, 400));

//objects 

const user ={
    username: "sumit",
    price: 299,
}

function handleObject (anyobject) {
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`);
};
// handleObject(user);

handleObject({
    username: "sam",
    price: 499
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));