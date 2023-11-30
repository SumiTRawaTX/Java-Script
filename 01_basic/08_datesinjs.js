// DATE - in js date represet a single moment in time in platform-
//        independent format. Date objects encapsulate an integral 
//        number that represent millisecond since the midnight at the 
//        beginning of january 1, 1970.

let myDate = new Date();
// console.log(myDate); // too complicate to understand date

// need to convert date into string
// console.log(myDate.toString()); // more methods
// console.log(myDate.toDateString()); //thu Nov 30 2023
// console.log(myDate.toLocaleDateString()); //11/30/2023

console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023 12:00:00 AM


//Time Stamp
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(myDate.getDay());

// `${newDate.getDay()} and the time is`

newDate.toLocaleString('default', {
    weekday: "long",
});