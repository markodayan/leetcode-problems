// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

function intersect(nums1, nums2) {
  let results = [];
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < nums1.length; i++) {
    let value = nums1[i];
    if (!obj1[value]) {
      obj1[value] = 1;
    } else {
      obj1[value]++;
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    let value = nums2[j];
    if (!obj2[value]) {
      obj2[value] = 1;
    } else {
      obj2[value]++;
    }
  }

  for (let key in obj1) {
    if (obj1[key] && obj2[key]) {
      let freq = 0;
      let count = Math.min(obj1[key], obj2[key]);
      while (freq < count) {
        results.push(+key);
        freq++;
      }
    }
  }

  return results;
}
