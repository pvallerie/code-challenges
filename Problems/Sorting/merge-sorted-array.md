# Merge Sorted Array

## Attempt
```py
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        pointer1 = 0
        pointer2 = 0
        
#         while nums1[pointer1] or nums2[pointer2] are None
        while pointer1 < m and pointer2 < n:
    
    #         if pointer2 >= pointer1
            if nums2[pointer2] <= nums1[pointer1]:
    #             insert pointer2 before pointer1
                nums1.insert(pointer1 - 1, nums2[pointer2])
    #             move pointer2 to next value
                pointer2 += 1

    #         else
            else:
    #             move pointer1 to next value
                pointer1 += 1
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
