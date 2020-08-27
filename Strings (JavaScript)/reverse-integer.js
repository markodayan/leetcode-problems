// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range:

// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

function reverse(x) {
  let negative = false;
  let result = [];
  let resultInteger;
  let limit = Math.pow(2, 31) - 1;

  if (x < 0) negative = true;

  let str = Math.abs(x).toString();

  for (let i = 0; i < str.length; i++) {
    result.unshift(+str[i]);
  }

  resultInteger = +result.join('');

  if (Math.abs(resultInteger) > limit) return 0;

  if (negative) return -1 * resultInteger;

  return resultInteger;
}
