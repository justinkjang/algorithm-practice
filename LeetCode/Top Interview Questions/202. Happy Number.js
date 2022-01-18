/**
 * @param {number} n
 * @return {boolean}
 */

let getNum = (num) => {
  let total = 0;

  while (num !== 0) {
    let lastDigit = num % 10;

    num = Math.floor(num / 10);

    total += Math.pow(lastDigit, 2);
  }

  return total;
};

var isHappy = function (n) {
  let fast = n;
  let slow = n;

  while (true) {
    fast = getNum(getNum(fast));
    slow = getNum(slow);

    if (fast === slow) {
      return fast === 1;
    }
  }
};