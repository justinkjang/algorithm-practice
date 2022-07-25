function minimumGroups(arr, k) {
  arr.sort((a, b) => a - b); // sort array

  let count = 1;
  let startIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - arr[startIdx] > k) {
      count++;
      startIdx = i;
    }
  }

  return count;

  // Time : n log n (sort, linear)
  // Space : n (sort)
}

console.log(minimumGroups([1, 13, 6, 8, 9, 3, 5], 4)); // answer: 3
