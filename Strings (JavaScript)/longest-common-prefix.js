// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

function longestCommonPrefix(strs) {
  if (strs.length === 1) return strs[0];
  let min = Infinity;
  let common = [];
  let same = true;

  strs.forEach((val, i) => {
    min = Math.min(min, val.length);
  });

  for (let i = 0; i < min; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) {
        same = false;
        break;
      }

      if (j === strs.length - 2) common.push(strs[j][i]);
    }

    if (common.length === 0 && i === 0) return '';
    if (!same) break;
  }

  let result = common.join('');
  return result;
}
