// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

function reverseString(s) {
  let end = s.length - 1;

  for (let start = 0; start < s.length; start++) {
    // odd string end case (single value as midpoint)
    if (start === end) break;

    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;

    // start and end pointer next to each other (final swap done in even string)
    if (end - start === 1) break;

    end--;
  }
}
