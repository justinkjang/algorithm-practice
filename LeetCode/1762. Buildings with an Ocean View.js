// 05 13 2022
// Premium problem

let height = [4, 2, 3, 1];

function buildingsWithAnOceanView(height) {
  let result = [];
  let max = 0;

  for (let i = height.length - 1; i >= 0; i--) {
    if (height[i] > max) {
      result.push(i);
      max = height[i];
    } else {
      continue;
    }
  }

  result.reverse(); // O(n)
  console.log(result);
}

buildingsWithAnOceanView(height);
// Time:: n  (relative to input, how many times are we traversing through our input array?)
// Space:: n
