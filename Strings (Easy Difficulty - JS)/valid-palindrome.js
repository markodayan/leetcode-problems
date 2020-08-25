// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

// Constraints:

// s consists only of printable ASCII characters.

function isPalindrome(s) {
  let str = s.toLowerCase().split('');
  let removeCount = 0;
  let toRemove = {};

  //     if(str.length < 2) return true;

  // get map of chars to remove
  for (let i = 0; i < str.length; i++) {
    let value = str[i];
    let code = str[i].charCodeAt(0);

    if ((code > 96 && code < 123) || (code > 47 && code < 58)) {
      null;
    } else {
      if (!toRemove[value]) {
        toRemove[value] = 1;
      } else {
        toRemove[value]++;
      }
      removeCount++;
    }
  }

  // remove non-alphanumerics (sanitise input action)
  for (let key in toRemove) {
    let length = toRemove[key];

    while (length > 0) {
      let index = str.indexOf(key);
      str.splice(index, 1);
      length--;
    }
  }

  // sanitised string now empty string which is palindrome
  if (str.length < 2) return true;

  // palindrome check
  let end = str.length - 1;
  for (let start = 0; start < str.length; start++) {
    // odd string (end case)
    if (start === end) return true;

    if (str[start] !== str[end]) break;
    // even string (end case)
    if (end - start === 1) return true;

    end--;
  }

  return false;
}
