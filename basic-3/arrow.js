const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


const demo = {
    name: "Hello Word",
    greet: () => console.log(this.name) // !! 'this' points to global/window scope, not 'demo'
};
demo.greet(); // Output: undefined


const Person = (name) => { this.name = name; };
const bob = new Person("Bob"); //  TypeError: Person is not a constructor


// ##############################Keep in Mind ##############################
/*

1. No Lexical this Binding

Traditional functions create their own this context depending on how they are called. 
Arrow functions do not create their own this.
 They inherit this from the surrounding (parent) scope.
*/


