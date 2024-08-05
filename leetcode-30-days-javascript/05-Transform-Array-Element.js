// Given an integer array arr and a mapping function fn,
// return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

var map = function(arr, fn) {
    const result = [];
  
    // Approach 1: Using forEach
    arr.forEach((element, index) => result.push(fn(element, index)));
  
    // Approach 2: Using for loop
    // for (let i = 0; i < arr.length; i++) {
    //   result.push(fn(arr[i], i));
    // }
  
    return result;
  };
  
  const arr = [1, 2, 3];
  const fn = function plusone(n, i) {
    return n + 1;
  };
  const newArray = map(arr, fn); // [2, 3, 4]
  console.log(newArray);
  
