// it give number data type
let score = 33;
// console.log(typeof score);
// console.log(typeof(score));

// it give string data type
let score1 = "33";
// console.log(typeof score1);
// console.log(typeof(score1));

//conversion 
let valueInNumber = Number(score1); // this line convert string to number
// console.log(typeof(valueInNumber));

// example
let score2 = "33abc";
let valueInNumber1 = Number(score2);
// console.log(typeof(valueInNumber1)); // number data type
// console.log(valueInNumber1); // NaN not a number 


// for string
let someNumber = 2;

let stringConversion = String(someNumber);
// console.log(stringConversion);
// console.log(typeof (stringConversion));


// "33" => 33
// "33abc" => NaN
// true => 1 || false => 0



// *********************** Operations *************************************

let value = 3;
let negValue = -value;
// console.log(negValue);
// console.log(value);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);


//combine two string
let str1 = "hello";
let str2 = " sumit";
let str3 = str1 + str2;
console.log(str3);


// toPremitive code

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");