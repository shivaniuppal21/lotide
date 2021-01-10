const assertArraysEquals = require('../assertArraysEqual')
const middle = require('../middle');



console.log(middle([1, 2, 3, 4, 5,6]));
console.log(assertArraysEquals(middle([1, 2, 3, 4, 5,6]), [3,4]));