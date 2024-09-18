// 2703. Return Length of Arguments Passed
// Write a function argumentsLength that returns the count of arguments passed to it.

var argumentsLength = function(...args) {
    return args.length
};

console.log(argumentsLength({}, null, "3")); // Output: 3
console.log(argumentsLength(5)); // Output 1