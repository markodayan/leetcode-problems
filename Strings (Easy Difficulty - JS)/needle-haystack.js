// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

//  Input:
// "mississippi"
// "issip"
// Output: 4

// Constraints:

// haystack and needle consist only of lowercase English characters.

function strStr(haystack, needle) {
  if (needle.trim().length === 0) return 0;

  let queue = [];
  let matchIndex = 0;
  let beginningMatch = false;

  haystack.split('').forEach((val, i) => {
    if (val === needle[0]) queue.push(i);
  });

  console.log(queue);

  let start = queue.shift();

  // 10
  for (let i = start; i < haystack.length; i++) {
    //   i               y
    if (haystack[i] === needle[matchIndex]) {
      if (haystack[i] === needle[0] && !beginningMatch) {
        beginningMatch = true;
      }

      matchIndex++;
    } else {
      if (queue.length === 0) break;
      // 6
      start = queue.shift();
      // []
      // 5
      i = start - 1;
      matchIndex = 0;
      beginningMatch = false;
    }
    //    4             6
    if (matchIndex === needle.length) return start;
  }

  return -1;
}
