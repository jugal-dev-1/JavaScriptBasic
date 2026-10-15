// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')



//############################## My Notes ##############################
// 1. Standard Anonymous IIFE
(function () {
    console.log("This runs right away!");
})();  // Semicolon explicitly separates them

// 2. Arrow Function Variant
(() => {
    console.log("This runs immediately too!");
})();


// must use semicolon when you use muliplte IIFE one after onther otherwise it will give you error

// defination =="Avoiding Global Namespace Pollution: Before modern modules, if you loaded multiple scripts, their variable names could conflict. An IIFE traps all code safely inside its own bubble"


// ****Kepp in Mind ******

// ##Modern Alternatives

/* In modern JavaScript (ES6+), you often don't need IIFEs as much due to two upgrades:
1. let and const Block Scoping: Simply putting code inside curly braces { let x = 1; } prevents x from leaking out.
2. ES Modules (import / export): Files have their own isolated scopes by default, solving the global pollution problem natively */