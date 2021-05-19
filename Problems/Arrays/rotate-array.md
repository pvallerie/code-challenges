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

```js
var rotate = function(nums, k) {
//     while loop that loops until k is 0
    while (k > 0) {
//      add last element to beginning of array
        nums.unshift(nums[nums.length - 1])
//      remove last element
        nums.pop()
//      decrement k
        k--
    }
    
//     return nums
    return nums
};
```

## Solution
```js

```