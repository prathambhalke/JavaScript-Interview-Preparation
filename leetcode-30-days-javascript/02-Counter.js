//02:Create a function that gives you a counter.
// When you call this counter for the first time, it should return the number you started with. Each subsequent call should return the next number in the sequence.

var createCounter = function(n) {
    return function() {
       return n++;
    };
};

const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12