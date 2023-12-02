// node 03_basic/03_scopes

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

let a = 300;
if(true) { 
    let a = 10;
    const b = 20;
    var c = 30;
}
console.log(a);
console.log(b); 
console.log(c); //30
