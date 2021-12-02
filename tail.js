// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

const tail = function(newArr) {
  newArr = newArr.slice(1);
  return newArr;
};

module.exports = tail;