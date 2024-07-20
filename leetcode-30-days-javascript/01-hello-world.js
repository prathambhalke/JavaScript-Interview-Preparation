// 01.Write a function createHelloWorld, 
// It should return a new function that always returns "Hello World".

//Approach 1

var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"
    }       
};

//Approach 2

// var createHelloWorld = () => {
//     return () => "Hello World"
// }

const f = createHelloWorld();
console.log(f()); // "Hello World"
