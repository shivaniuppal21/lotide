// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  else { 
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  return assertEqual};  
  module.exports = assertEqual;

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp"); 
//assertEqual(1,1);

