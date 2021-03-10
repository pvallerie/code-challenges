# Intersection of Two Arrays II
Given two arrays, write a function to compute their intersection.

example 1:
```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

example 2:
```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
```

## Attempt
```py
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
#         set output accumulator array
        output = []

#         iterate through nums1
        for i in range(len(nums1) - 1):
#             iterate through nums2
            for j in range(len(nums2) - 1):
#                 if i and j match
                if nums1[i] == nums2[j]:
#                     add i to accumulator array
                    output.append(nums1[i])
                    break

        return output
```

## Solution
```py

```
