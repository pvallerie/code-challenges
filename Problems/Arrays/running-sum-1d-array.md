# Running Sum of 1d Array
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:
```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
```

## Attempt
Time: O(n) where n is the length of the input array
Space: O(n) since we don't use any additional space to find the running sum (space of output array not taken into consideration)
```py
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
#         create accumulator list
        runningSum = []
        
#         iterate through nums
        for i in range(len(nums)):
#             add all numbers before i together with i
            if i == 0:
                runningSum.append(nums[i])
            else:
                runningSum.append(runningSum[i - 1] + nums[i])
                
        return runningSum
```

## Solution
Time: O(n) where n is the length of input array
Space: O(n) since we don't use any additional space to find the running sum (space of output array not taken into consideration)
```py
class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        # iterate throguh input list
        for i in range(len(nums)):
            # change nums array in place to save space
            nums[i] += nums[i - 1]

        return nums
```