console.log("Hello, World!");
const accountId = 45153
let accountEmail = "Abc@gmail.com"
var accountPassword = "123456"
accountCity = "Delhi"
let accountState 

// accountId = 22 not allowed because it is a constant variable

accountEmail = "zyx@gmail.com"
accountPassword = "987654"
accountCity = "Mumbai"

/* preffer not ti use var because it is function scoped and can be 
redeclared and updated. let is block scoped and can be updated but not redeclared.
  const is block scoped and cannot be updated or redeclared. */

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
