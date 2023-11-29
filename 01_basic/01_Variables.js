const accountId = 144553; // lock the value 
let accountEmail = "sumit@google.com";
var accountPassword = " 12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; cannot update the value in const variables. It is not allowed

accountEmail = " abc@.com";
accountPassword = "87";
accountCity = "Bengaluru";

console.log(accountId);
 
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);