//singleton

//object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Sumit",
    [mySym]: "mykey1", 
    "full name": "Sumit Rawat",
    age: 18,
    location: "UP",
    email: "abc1123@google.com",
    isLoggedIn: false,
    lastLoginaDays: ["Monday", "Saturday"]
};

console.log(jsUser.email);
//or
console.log(jsUser["email"]);
console.log(jsUser["full name"]); // we can access full name in this console
console.log(jsUser[mySym]);

//value change in object
jsUser.email = "abc@chatgpt.com";

Object.freeze(jsUser);
jsUser.email = "abc@microsoft.com";
console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello js user");
}
console.log(jsUser.greeting);