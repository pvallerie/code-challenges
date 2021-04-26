# Contains Duplicate

## Attempt
```js
var containsDuplicate = function(nums) {
//     hash table to store values of nums
    numbers = {}
    
//     loop through nums
    for (let i = 0; i < nums.length; i++) {
//         if num exists in numbers
        if (numbers[nums[i]]) {
//             return false
            return true
        }
        numbers[nums[i]] = 1
    }
    
//     return true
    return false
};
```

## Solution
```js
var containsDuplicate = function(nums) {
    // convert nums array to a set, which removes duplicates
    // then compare length of set to length of array
    // WHAMMY
    return new Set(nums).size < nums.length;
};
```