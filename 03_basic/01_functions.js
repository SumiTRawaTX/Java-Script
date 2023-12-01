// node 03_basic/01_functions


function sayMyName () {
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("I");
    console.log("T");
}
// sayMyName();

// add two number
// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumber(3, 5);
// addTwoNumber(3, "3");
// addTwoNumber(3, "a");
// addTwoNumber(3, null);


// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }
// const result = addTwoNumber(3, 5); // by taking another variable
// console.log(result); // undefined


//method 2:-
function addTwoNumber(number1, number2) {
    // let result = number1 + number2;
    // console.log("Sumit");
    // return result;
    console.log("sumit"); // after return nothing is going for print
    return number1 + number2;
}
const result = addTwoNumber(3, 5);
// console.log(result);

function loginUserMessage (username) {
    if(username === undefined) {
        console.log("please enter valid name");
    }
    return `${username} just log in`
}
console.log(loginUserMessage("Sumit"));
console.log(loginUserMessage()); // undefined just log in