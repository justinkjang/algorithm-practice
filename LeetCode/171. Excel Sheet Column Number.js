/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let base = 'A'.charCodeAt(0) - 1;

  let num = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    num +=
      (columnTitle.charCodeAt(i) - base) *
      Math.pow(26, columnTitle.length - 1 - i);
  }

  return num;
};
