/*const middle = require('../middle');

//TEST CODE
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
*/

const assert = require('chai').assert;
const middle = require('../middle');
const expect = require('chai').expect;

describe('#middle', () => {
  it('returns [] for [1]', () => {
    const results = middle([1]);
    expect(results).to.eql([]);
  });
});

