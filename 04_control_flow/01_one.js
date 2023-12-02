// node 04_control_flow/01_one

// if syntax
// if(condition) {
//     //codes
// }

const temperature = 40;
if(temperature < 50) {
    // console.log("less then 50");
}
else { 
    // console.log("temperture greater then 50");
}

const score = 200;
if(score > 100) {
    let power = "fly";
    // console.log(`user power ${power}`);
}

const balance = 1000;
if(balance < 500) {
    console.log("less than 500")
}
else if(balance < 750) {
    console.log("less than 750");
}
else if(balance < 900) {
    console.log("less than 900");
}
// else {
//     // console.log("less than 1200");
// }



// example :- real world

const userLoggedIn = true;
const debitCard = true;
const loggedInFromgoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard) {
    console.log("allow to buy course");
}

if(loggedInFromgoogle || loggedInFromEmail) {
    console.log("user logged in");
}