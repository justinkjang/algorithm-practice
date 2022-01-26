/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isNeg = false;

  if (x < 0) {
    x = x * -1;
    isNeg = true;
  }

  let newNum = 0;

  // x = 214
  while (x > 0) {
    newNum *= 10; // 0   40  410
    newNum = newNum + (x % 10); // 4 41  412
    x = Math.floor(x / 10); // 21  2   0
  }

  if (newNum > 2 ** 31 - 1) return 0;

  if (isNeg) {
    newNum *= -1;
  }

  return newNum;
};

//Time :: O(n)?
//Space :: O(1)?
