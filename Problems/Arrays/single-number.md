# Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?



Example 1:
```
Input: nums = [2,2,1]
Output: 1
Example 2:
```
```
Input: nums = [4,1,2,1,2]
Output: 4
Example 3:
```
```
Input: nums = [1]
Output: 1
```

Constraints:

- `1 <= nums.length <= 3 * 104`
- `-3 * 104 <= nums[i] <= 3 * 104`
- Each element in the array appears twice except for one element which appears only once.

## Attempt
```py
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
#         dict to store tally of each num
        tallies = {}

#         iterate through nums
        for i in range(len(nums)):
#             if num exists in tallies
            if nums[i] in tallies:
#                 add to tally
                tallies[nums[i]] += 1

#             if it doesn't exist in tallies
            else:
#                 add new key/val pair to tallies
                tallies[nums[i]] = 1

#         iterate through tallies values
        for num in nums:
            if tallies[num] == 1:
                return num
```

## Solution
```py
from collections import defaultdict
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        hash_table = defaultdict(int)
        for i in nums:
            hash_table[i] += 1

        for i in hash_table:
            if hash_table[i] == 1:
                return i
```
