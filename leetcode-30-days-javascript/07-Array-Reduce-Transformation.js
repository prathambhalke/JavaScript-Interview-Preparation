// Given an integer array nums, a reducer function fn, and an initial value init,
// return the final result obtained by executing the fn function on each element 
// of the array, sequentially, passing in the return value from the calculation 
// on the preceding element.

// Please solve it without using the built-in Array.reduce method.

var reduce = function(nums, fn, init) {
    let value = init;
    for(let i = 0; i < nums.length; i++) {
        value = fn(value, nums[i])
    }
    return value
};

const nums = [1,2,3,4];
const fn = function sum(accum, curr) { return accum + curr; };
const init = 0; //Output: 10

// const nums = [1,2,3,4]
// const fn = function sum(accum, curr) { return accum + curr * curr; }
// const init = 100 //Output: 130

// const nums = []
// const fn = function sum(accum, curr) { return 0; }
// const init = 25 //Output: 25

console.log(reduce(nums,fn,init))