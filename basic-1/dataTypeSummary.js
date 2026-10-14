//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function () {
    console.log("Hello world");
}

// console.log(typeof anotherId);







// stack(primitive data), Heap(non primitive data) memory allocation

let myYoutubename = "mychannel"

let anotherName = myYoutubename
anotherName = "NewChannel"

// console.log(myYoutubename);
// console.log(anotherName);

let UserOne = {
    name: "one",
    email: "myemail@gmail.com"
}

let UserTwo = UserOne
UserTwo.name ="xyz"
UserTwo.email = "xyz@gmail.com"

// console.log(UserOne.email);
// console.log(UserTwo.email);

const testName = new String('Hello Word')
console.log(testName.toUpperCase());
console.log(testName.toLowerCase());

