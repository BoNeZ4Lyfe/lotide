const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let newArr = [];
  if (array.length < 3) {
    return newArr;
  }
  if (array.length % 2 !== 0) {
    newArr = array[Math.floor(array.length / 2)];
    return [newArr];
  }
  let midElement1 = array[(array.length / 2) - 1];
  let midElement2 = array[array.length / 2];
  return [midElement1, midElement2];
  
};

module.exports = middle;