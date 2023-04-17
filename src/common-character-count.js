const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  let first = {};
  let second = {};
  let s1Arr = s1.split('');
  let s2Arr = s2.split('');
  for (let i = 0; i < s1Arr.length; i++) {
    if (first[s1Arr[i]] === undefined) {
      first[s1Arr[i]] = 1;
    } else {
      first[s1Arr[i]]++;
    }
  }
  for (let i = 0; i < s2Arr.length; i++) {
    if (second[s2Arr[i]] === undefined) {
      second[s2Arr[i]] = 1;
    } else {
      second[s2Arr[i]]++;
    }
  }

  let newArr1 = [...new Set(s1Arr)];

  for (let i = 0; i < newArr1.length; i++) {
    if (first.hasOwnProperty(newArr1[i]) && second.hasOwnProperty(newArr1[i])) {
      if (first[newArr1[i]] > second[newArr1[i]]) {
        sum = sum + second[newArr1[i]];
      } else {
        sum = sum + first[newArr1[i]];
      }
    }
  }

  return sum;
}

module.exports = {
  getCommonCharacterCount
};
