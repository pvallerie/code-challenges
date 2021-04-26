# Rotate Array

## Attempt
```js
var rotate = function(nums, k) {
//     loop k times
    for (let i = 0; i < k; i++) {
//         pop off last num in array
        poppedNum = nums.pop(nums.length - 1)
//         add it to beginning of array
        nums.unshift(poppedNum)
    }
};
```

## Solution
```js

```