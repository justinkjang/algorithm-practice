/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (true) {
    if (n === 1) {
      return true;
    }
    n = n / 3;
    if (n === 1) {
      return true;
    }
    if (n < 1) {
      return false;
    }
  }
};
