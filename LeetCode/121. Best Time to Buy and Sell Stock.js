// 2022 05 08
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);

    max = Math.max(prices[i] - min, max);
  }

  return max;
};
// Time:: n
// Space:: 1

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }

  return profit;
};
