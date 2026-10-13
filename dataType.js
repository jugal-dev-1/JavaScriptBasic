let score= "Hello World";
// console.log(score);
// console.log(typeof score);
// console.log(typeof (score));


let valueInNumber = Number(score)
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// "33" =>33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "aaa";
let booleanISLoggedIn = Boolean(isLoggedIn)

// console.log(booleanISLoggedIn);
// console.log(typeof booleanISLoggedIn);



//  ******************** Operations ********************
let value = 5;
let value2 = 4;
// let negValue = -value;
// console.log(value + value2);
// console.log(value - value2);
// console.log(value * value2);
// console.log(value / value2);
// console.log(value % value2);

let str1 = "Hello";
let str2 = " User";
let str3 = str1 + str2;
// console.log(str3);

// let gameCounter = 100;
// console.log(gameCounter);
// gameCounter++;
// console.log(gameCounter);
// ++gameCounter;
// console.log(gameCounter);

// gameCounter--;
// console.log(gameCounter);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
