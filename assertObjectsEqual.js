// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`โโโAssertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`๐๐๐Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let objectKeys1 = Object.keys(object1);
  let objectKeys2 = Object.keys(object2);
  if (objectKeys1.length !== objectKeys2.length) {
    return false;
  } else {
    for (let key of objectKeys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
          return (eqObjects(object1[key], object2[key]));
        }
      }
    }
    return true;
  }
  
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`โโโ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`๐๐๐ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba);