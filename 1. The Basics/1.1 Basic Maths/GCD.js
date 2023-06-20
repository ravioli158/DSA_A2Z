// Find GCD of two numbers
// Problem Statement: Find gcd of two numbers.

// Examples:

// Example 1:
// Input: num1 = 4, num2 = 8
// Output: 4
// Explanation: Since 4 is the greatest number which divides both num1 and num2.

// Example 2:
// Input: num1 = 3, num2 = 6
// Output: 3
// Explanation: Since 3 is the greatest number which divides both num1 and num2.

function gcd(a, b)
{
    if(b == 0)
    {
        return a
    }
    return gcd(b, a % b)
}
console.log(gcd(30,18))

//time complexity O(log(min(a,b))