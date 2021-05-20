# Plus One

## Attempt
(accepted)
```js
var plusOne = function(digits) {
//  if last digit is not a 9
    if (digits[digits.length - 1] !== 9) {
//      increment last digit by one
        digits[digits.length - 1] += 1
//  else
    } else {
//      iterate backwards
        for (let i = digits.length - 1; i >= 0; i--) {
//          if i is 0 && digit equals 9
            if (i === 0 && digits[i] === 9) {
//              change digit to 0
                digits[i] = 0
//              append a 1 to beginning of array
                digits.unshift(1)
//              break out of loop
                break
            }
//          if digit is 9
            if (digits[i] === 9) {
//              change digit to 0
                digits[i] = 0
//          else
            } else {
//              increment digit by 1
                digits[i]++
                break
            }
        }
    }
    return digits
};
```

## Solution
```js
var plusOne = function(digits) {
    // iterate backwareds through digits
    for(var i = digits.length - 1; i >= 0; i--){
        // if current digit plus 1 is greater than 9
        // set current digit to 0
        if(++digits[i] > 9) digits[i] = 0;
        // else return digits
        else return digits;
    }
    // if we got to first digit in array in loop
    // add 1 to beginning of digits
    digits.unshift(1);
    // return digits
    return digits;
};
```