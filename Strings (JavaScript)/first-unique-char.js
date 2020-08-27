// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// Note: You may assume the string contains only lowercase English letters.

function firstUniqChar(s) {
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) return s.indexOf(key);
  }

  return -1;
}
