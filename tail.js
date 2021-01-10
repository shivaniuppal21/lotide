/*const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    }
    else { 
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
    return assertEqual}; */ 


const assertEqual = require('./assertEqual');
const tail = function(array){
  if(array.length === 1 || array.length === 0){
    return []
  } else {
    return (array.slice(1))
  }    
  };
  
  module.exports = tail;

 /* // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp"); 
  assertEqual(1,1);
  
  const result = tail([5,6,7])
  assertEqual(result[0], 6);
  assertEqual(result[1], 7);

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); //

const check = tail([1]);
tail(check)
assertEqual(check.length, 1)*/