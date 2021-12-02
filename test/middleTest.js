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

describe('#middle', () => {
  it('returns [] for [1]'), () => {
    assert.strictEqual(middle([1]),[]);
  };
});

