// 1. Creation
const sym1 = Symbol("myIdentifier");
const sym2 = Symbol("myIdentifier");

console.log(sym1 === sym2); // false (Every Symbol is strictly unique!)
console.log(typeof sym1);   // "symbol"

// 2. Using as an Object Key
const user = {
  name: "Alice",
  [sym1]: "Confidential User ID" // Computed property syntax
};

// Accessing the property requires the exact symbol reference
console.log(user[sym1]); // "Confidential User ID"
console.log(user.sym1);  // undefined (Dot notation does not work for symbols)


/############################## NOTE ##############################/
/* Symbol can be used primarily as an object property key to prevent naming collisions,
  ensuring that no other piece of code can accidentally overwrite or conflict with that property */



const mySym = Symbol("key1")


const JsUser = {
    name: "Test",
    "full name": "Test Name",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "test@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "test@chatgpt.com"
// Object.freeze(JsUser)   freeze it to prevent modifications
JsUser.email = "test@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());