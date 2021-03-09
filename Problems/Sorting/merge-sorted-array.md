# Merge Sorted Array

## Attempt
```py
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        insert_index = m
#       iterate through nums2
        for i in range(len(nums2)):
#             insert current num into nums1 at insert_index
            nums1[insert_index] = nums2[i]
#             increment insert_index
            insert_index += 1

        nums1.sort()
```

## Solution
```py
def merge(self, nums1, m, nums2, n):
        while m > 0 and n > 0:
            if nums1[m-1] >= nums2[n-1]:
                nums1[m+n-1] = nums1[m-1]
                m -= 1
            else:
                nums1[m+n-1] = nums2[n-1]
                n -= 1
        if n > 0:
            nums1[:n] = nums2[:n]
```
