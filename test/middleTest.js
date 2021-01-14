/*const assertArraysEquals = require('../assertArraysEqual')
const middle = require('../middle');



console.log(middle([1, 2, 3, 4, 5,6]));
console.log(assertArraysEquals(middle([1, 2, 3, 4, 5,6]), [3,4]));*/

const assert = require('chai').assert;
const expect = require('chai').expect;

const middle   = require('../middle');

describe("#middle", () => {
  it("returns 3,4 for [1, 2, 3,4,5,6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5,6]),[3,4]);
    //assert.toString.eql(tail([1, 2, 3]), [2,3]);
  });

});