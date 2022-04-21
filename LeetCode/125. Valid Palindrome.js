/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, ''); // regex remove all non-alphanumeric characters

  if (s !== s.split('').reverse().join('')) {
    return false;
  } else {
    return true;
  }
};
