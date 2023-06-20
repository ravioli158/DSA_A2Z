// Problem Statement: Given a number, check whether it is prime or not. 
//A prime number is a natural number that is only divisible by 1 and by itself.

// Examples 1 2 3 5 7 11 13 17 19 …

// Examples:

// Example 1:
// Input: N = 3
// Output: Prime
// Explanation: 3 is a prime number

// Example 2:
// Input: N = 26
// Output: Non-Prime
// Explanation: 26 is not prime

// O(sqrt(n))

function isPrime(n)
{
    //if even it is not prime 
    for(let i = 2; i < Math.sqrt(n); i++)
    {
        if( n % i == 0)
        {
            return false
        }
    }
    return true
}

console.log(isPrime(57))
console.log(isPrime(13))
