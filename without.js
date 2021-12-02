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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }

  
};
const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let x = 0; x < source.length; x++) {
    if (!itemsToRemove.includes(source[x])) {
      newArr.push(source[x]);
    }
  }
  return newArr;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
const result = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(result, ["hello", "world", "lighthouse"]);
