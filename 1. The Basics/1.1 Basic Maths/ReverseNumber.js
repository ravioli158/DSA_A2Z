var reverse = function(x) {
   
    let num = x < 0 ? -1 * x : x
     let reversedNum = 0
     while(num > 0)
     {
         let lastDigit = num % 10
         reversedNum = 10 * reversedNum + lastDigit
         num = Math.floor(num/10)
     }
      if (reversedNum > Math.pow(2, 31) - 1 || reversedNum < -Math.pow(2, 31)) {
       return 0;
    }
     return  x < 0 ? -1 *  reversedNum : reversedNum;
 };