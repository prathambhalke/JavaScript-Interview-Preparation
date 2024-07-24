// Write a function called expect to help developers test their code. This function
// should take any value as input and return an object with two functions:

// 01.toBe(val): This function should take another value as input and return true if
// both values are exactly equal (===). If they are not equal, it should throw an error
// with the message "Not Equal".

// 02.notToBe(val): This function should take another value as input and return true if
// the values are not exactly equal (!==). If they are equal, it should throw an error 
// with the message "Equal".

var expect = function(val) {
    return {
      toBe : (val2) =>{
          if(val !== val2)  throw new Error("Not Equal")
          else  return true
      },
        notToBe : (val2) => {
            if(val === val2) throw new Error("Equal")
           else return true
        }
    }
};

expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"
