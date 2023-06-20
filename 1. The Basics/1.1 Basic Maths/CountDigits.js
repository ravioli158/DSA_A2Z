// Problem Statement: Given an integer N , write program to count number of digits in N.

// Examples:

// Example 1:
// Input: N = 12345
// Output: 5
// Explanation: N has 5 digits

// Example 2:
// Input: N = 8394
// Output: 4
// Explanation: N has 4 digits

// Approach 1
/// Time and Space : O(1)
function countDigits(num) {
  if (num == 0) {
    return 1;
  }
  if (num < 0) {
    num = Math.abs(num);
  }
  // using property
  // log x to base a = log x to base b / log a to base b
  return Math.floor(Math.log(num) / Math.log(10) + 1);
}
// Approach 2
// function countDigits(num)
// {
//     if( num == 0)
//     {
//         return 1
//     }
//     if( num < 0)
//     {
//         num = num * -1
//     }
//     let count = 0
//     while(num > 0)
//     {
//         num = Number.parseInt(num / 10)
//         count++
//     }
//     return count
// }

// Helper function for assertions
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected}, but received ${actual}`);
      }
    },
  };
}

// Test cases
try {
  // Count digits in a positive number
  let num = 8394;
  let result = countDigits(num);
  expect(result).toBe(4);

  // Count digits in zero
  num = 0;
  result = countDigits(num);
  expect(result).toBe(1);

  // Count digits in a negative number
  num = -12345;
  result = countDigits(num);
  expect(result).toBe(5);

  console.log("All test cases passed!");
} catch (error) {
  console.error("Test case failed:", error.message);
}

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
