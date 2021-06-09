# Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Attempt
Brute Force
```js
var twoSum = function(nums, target) {
    // loop through nums
    for (let i=0; i<nums.length-1; i++) {
        // loop through nums
        for (let j = i+1; j < nums.length; j++) {
            // if nums[i] + nums[j] = target
            if ((nums[i] + nums[j]) === target) {
                // return [i,j]
                return [i,j]
            }
        }
    }
};

const nums = [3, 2, 4]
const target = 6
twoSum(nums, target)
```

Hash Table
```js
var twoSum = function(nums, target) {
    // hash table
    const difs = {}
    
    // loop through nums
    for (let i=0; i<nums.length; i++){
        // subtract nums[i] from target and set to dif var
        const dif = target - nums[i]
        // store nums[i] in hash table with dif var as key
        difs[dif] = i
    }
    
    // loop through nums
    for (let i=0; i<nums.length; i++){
        // if nums[i] in hash table
        if (nums[i] in difs) {
            // we'll use the str version of our current element as key in hash table
            const key = nums[i].toString()
            // return [i, hashTable[nums[i]]
            return [i, difs[key]]
        }
    }
};
```

## Solution
```js

```