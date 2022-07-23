// 07 23 2022
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  // Time = n = num of pixels in image
  // Space = n = size of implicit call stack when calling dfs

  // if no change needed to be made, return as is.
  const currColor = image[sr][sc]; //store currColor as variable
  if (newColor === currColor) return image;

  const dfs = (img, row, col) => {
    if (
      row >= img.length ||
      row < 0 ||
      col >= img[0].length ||
      col < 0 ||
      img[row][col] !== currColor
    )
      return;

    img[row][col] = newColor;
    dfs(img, row - 1, col);
    dfs(img, row + 1, col);
    dfs(img, row, col - 1);
    dfs(img, row, col + 1);

    return img;
  };

  return dfs(image, sr, sc);
};
