// Given an integer array arr and a filtering function fn,
//  return a filtered array filteredArr.

// The fn function takes one or two arguments:

// filteredArr should only contain the elements from the arr for which the 
// expression fn(arr[i], i) evaluates to a truthy value. 
// A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.


var filter = function(arr, fn) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      fn(arr[i],i) && result.push(arr[i])
    }
    return result
};

//  Test Cases

const arr = [0,10,20,30]
const fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]

// const arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]

// const arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]

console.log(filter(arr,fn))