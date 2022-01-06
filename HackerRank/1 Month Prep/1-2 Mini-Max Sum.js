function miniMaxSum(arr) {
  // Write your code here

  let sum = arr.reduce((a, b) => a + b);
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.log(sum - max, sum - min);
}
