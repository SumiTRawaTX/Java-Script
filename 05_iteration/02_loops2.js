// node 05_iteration/02_loops2.js

// while loops

// syntax
// while(condition) {

// }

let index = 0;
while(index <= 10) {
    // console.log(`value of index is ${index}`);
    index = index + 2;
}

let myArr = ["flash", "batman", "superman"];

let arr = 0;

while(arr<myArr.length) {
    // console.log(`value is ${myArr[arr]}`);
    arr++;
}

// do-while loops

// syntax

// do {

// }
// while(condition);

let score = 1;

do {
    console.log(`score is ${score}`);
    score++;
}
while(score<=10);

let score1 = 11;

do {
    console.log(`score is ${score1}`);
    score++;
}
while(score<=10);
