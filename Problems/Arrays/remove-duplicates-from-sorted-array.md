# Remove Duplicates from Sorted Array
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

## Attempt
```py
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
#         output accumulator
        output = []

#         iterate through nums array
        for num in nums:
#           iterate through output array
            for uniqueNum in output:
#               check if current num exists in output array
                if num == uniqueNum:
                    continue
                output.append(num)

#       return length of output
        return len(output)
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
