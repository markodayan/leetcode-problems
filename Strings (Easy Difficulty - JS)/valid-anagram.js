// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

function isAnagram(s, t) {
  let obj1 = {};
  let obj2 = {};

  if (s.length !== t.length) return false;

  // Obj map for word 1
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (!obj1[letter]) {
      obj1[letter] = 1;
    } else {
      obj1[letter]++;
    }
  }

  // Obj map for word 2
  for (let j = 0; j < t.length; j++) {
    let letter = t[j];
    if (!obj2[letter]) {
      obj2[letter] = 1;
    } else {
      obj2[letter]++;
    }
  }

  // Compare key value pairs in objects
  for (let key in obj1) {
    if (!obj2[key] || obj2[key] !== obj1[key]) return false;
  }

  return true;
}
