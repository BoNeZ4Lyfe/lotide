/*const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
*/

const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns Labs for ["Hello", "Lighthouse", "Labs"]'), () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), 'Labs');
  };
});