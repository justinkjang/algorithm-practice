/**
 * @param {number} n
 * @return {boolean}
 */

let getNum = (num) => {
  let total = 0;
  while (num !== 0) {
    total += Math.pow(num % 10, 2); // 9^2
    num = Math.floor(num / 10); // 11
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

//T = logN because depends on digit, not the actual size of number
