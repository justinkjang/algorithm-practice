/**
 * @param {number[]} digits
 * @return {number[]}
 */

// [1,2,3] [1,2,9] [9,9,9]

var plusOne = function (digits) {
  // A loooong string of number cannot be changed to integer using Number(), because the number gets rounded.

  for (let i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  digits.unshift(1);
  return digits;
};
