// Problem Statement: Given a number, check if it is Armstrong Number or Not.

// Examples:

// Example 1:
// Input:153 
// Output: Yes, it is an Armstrong Number
// Explanation: 1^3 + 5^3 + 3^3 = 153

// Input:170 
// Output: No, it is not an Armstrong Number
// Explanation: 1^3 + 7^3 + 0^3 != 170
// What are Armstrong Numbers?

// Armstrong Numbers are the numbers having the sum of digits raised to power no. of digits is equal to a given number. 
// Examples- 0, 1, 153, 370, 371, 407, and 1634 are some of the Armstrong Numbers.

function armstrongNumber(n)
{
    let sum = 0
    let num = n
    const length = Math.floor(Math.log10(num) + 1)
    while(num > 0)
    {
        
        const digit = num % 10
        sum += Math.pow(digit, length)
        num = parseInt(num/10)
    }
    if( sum == n)
    {
        return true
    }else{
        return false
    }
}

console.log(armstrongNumber(1634))