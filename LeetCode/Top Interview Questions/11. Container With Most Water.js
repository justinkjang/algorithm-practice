/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // [1,8,6,2,5,4,8,3,7]
  // calc smaller side
  // current area = (R-L) * smaller side
  // answer = max ( curArea, answer)
  // smallerside pointer move in.

  let result = 0;
  let left = 0; // left index num
  let right = height.length - 1; // right index num

  while (left < right) {
    let shortSide = Math.min(height[left], height[right]);

    let curArea = shortSide * (right - left);

    result = Math.max(result, curArea);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return result;
};

//Time:: O(n)
//Space:: O(1)
