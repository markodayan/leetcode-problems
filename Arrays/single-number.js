// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

function singleNumber(nums) {
  let obj = {};
  let candidate;
  let prevCandidate;
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    if (!obj[value]) {
      obj[value] = 1;
    } else {
      obj[value]++;
      delete obj[value];
    }
  }

  for (var key in obj) {
    return +key;
  }
}
