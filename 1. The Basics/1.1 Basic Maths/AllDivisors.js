/*
Problem Statement: 
Given a number, print all the divisors of the number. 
A divisor is a number that gives remainder as zero when divided.

Examples:

Example 1:
Input: n = 36
Output: 1 2 3 4 6 9 12 18 36
Explanation: All the divisors of 36 are printed.

Example 2:
Input: n = 97
Output: 1 97
Explanation: Since 97 is a prime number, only 1 and 97 are printed.
*/

// We can notice that the quotient of a division by one of the divisors is actually another divisor. 
// Like, 4 divides 36. The quotient is 9, and 9 also divides 36.
// Another intuition is that the root of a number actually acts as a splitting part of all the divisors of a number.
// Time Complexity: O(sqrt(n))
//Space : O(1)
function printAllDivisors(num) {
    if( num < 0)
    {
        num = -1 * num
    }
    const sqrt = Math.floor(Math.sqrt(num))
    for(let i = 1; i <= sqrt ; i++)
    {
        //console.log('checking',i)
        if(num % i == 0)
        {
            console.log(i)
            const quotient = Math.floor(num / i)
            
            if(i != quotient)
            {
                console.log(quotient)
            }
        }
       
    }
}

printAllDivisors(36)