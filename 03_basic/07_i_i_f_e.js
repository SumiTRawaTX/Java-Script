// Immediately Invoked Function Expression (IIFE)
// node 03_basic/07_i_i_f_e

// function chai() {
//     console.log(`DB Connected`);
// }
// chai();

(function chai() {
    console.log("db connected");
})();

//by arrow function
( () => {
    console.log("bd connected")
})();

( (name) => {
    console.log(`db connected ${name}`);
})('hitesh');