// node 03_basic/05_array_function

const user = {
    username: "sumit",
    price: 1999,

    welocmeMessage: function () {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
user.welocmeMessage();
user.username = "sam";
user.welocmeMessage();
// console.log(this);

// function chai() {
//     let username = "sumit";
//     console.log(this);
// }
// chai();

