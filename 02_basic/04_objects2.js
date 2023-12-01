// node 02_basic/04_objects2

// const tinderUser = new Object(); //single ton object
const tinderUser = {}; // non-single ton object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// example 

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Sumit",
            lastName: "Rawat"
        }

    }
}
// console.log(regularUser)
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullname);
// console.log(regularUser.fullName.userFullname.firstName);

// merge two object

const obj1 = {1: "a", 2: "b"}; // key: "string"
const obj2 = {3: "a", 4: "b"};


//const obj3 = {obj1, obj2};
// new method
// const obj3 = Object.assign(obj1, obj2); // or
// const obj3 = Object.assign({}, obj1, obj2) // or
const obj3 = {...obj1, ...obj2}
console.log(obj3);
