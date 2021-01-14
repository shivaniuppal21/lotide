/*const assertEqual = require('../assertEqual')
const tail = require('../tail');

const result = tail([5,6,7])
  assertEqual(result[0], 6);
  assertEqual(result[1], 7);*/

const assert = require('chai').assert;
const expect = require('chai').expect;

const tail   = require('../tail');

describe("#tail", () => {
  it("returns 2,3 for [1, 2, 3]", () => {
    expect(tail([1, 2, 3])).to.eql([2, 3]);
    //assert.toString.eql(tail([1, 2, 3]), [2,3]);
  });
  it("returns '' for ['5']", () => {
    expect(tail(['5'])).to.eql([]); 
  });
});