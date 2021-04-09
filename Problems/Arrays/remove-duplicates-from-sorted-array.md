# Remove Duplicates from Sorted Array
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

## Attempt
```py
def removeDuplicates(self, nums: List[int]) -> int:
#         iterate backwards through nums list
        for i in range(len(nums)-1, 0, -1):
        
#             check if current value is same as value to the left
            if nums[i] == nums[i-1]:
#                     if it is, remove it
                    nums.pop(i)
                
        return len(nums)
```

## Solution
```py
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        # turn nums array into a set (which removes duplicates), then save it to nums as an array
        nums[:] = set(nums)
        # return the length of that new nums array
        return len(nums)
```
