// node 05_iteration/03_loop3.js

// for of loops

//["", "", ""];
// [{}. {}, {}];

const arr = [1,2,3,4,5];

for(const num of arr) {
    // console.log(num);
}

const greetings = "hello world";
for(const greet of greetings) {
    // console.log(greet);
}

//maps

const map = new Map();
map.set(`IN`, "India");
map.set(`USA`, "United States Of America");
map.set(`Fr`, "France");

console.log(map);
const map1 = new Map();
map.set(`IN`, "India");
map.set(`IN`, "India");
map.set(`USA`, "United States Of America");
map.set(`Fr`, "France");

console.log(map1);

for(const key of map) {
    console.log(key);
}

for(const [key, value] of map) {
    // console.log(key, ':-', value);
}




