# Shuffle an Array
Given an integer array `nums`, design an algorithm to randomly shuffle the array.

Implement the `Solution` class:

`Solution(int[] nums)` Initializes the object with the integer array nums.
`int[] reset()` Resets the array to its original configuration and returns it.
`int[] shuffle()` Returns a random shuffling of the array.
 

Example 1:
```
Input
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
Output
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must be equally likely to be returned. Example: return [3, 1, 2]
solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]
```

## Attempt
```js
const Solution = function(nums) {
    this.original = nums
};


// Resets the array to its original configuration and return it.
Solution.prototype.reset = function() {
    return this.original
};


// Returns a random shuffling of the array using the Fisher-Yates (aka Knuth) Shuffle.
Solution.prototype.shuffle = function() {
    // slice entire array from idx 0 to the end and store it in variable `shuffled`
    const shuffled = this.original.slice(0)

    // iterate backwards through shuffled array
    for (let i = shuffled.length - 1; i > 0; i--) {
        // set variable `j` to random number between 0 and `i`
        const j = Math.floor(Math.random() * i)
        // set variable `temp` to current element
        const temp = shuffled[i]
        // change current element to element at random idx `j`
        shuffled[i] = shuffled[j]
        // change element at random idx `j` to current element
        shuffled[j] = temp
    }
    return shuffled
};
```

## Solution
```py
import random
class Solution(object):

    def __init__(self, nums):
        self.nums = nums

    def reset(self):
        return self.nums

    def shuffle(self):
        ans = self.nums[:]                     # copy list
        for i in range(len(ans)-1, 0, -1):     # start from end
            j = random.randrange(0, i+1)    # generate random index 
            ans[i], ans[j] = ans[j], ans[i]    # swap
        return ans
```