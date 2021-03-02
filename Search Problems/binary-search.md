# Binary Search
Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise `-1`.

## Attempt
```py
def binarySearch(arr, target):
  # define start, end, and middle
  start = arr[0]
  end = arr[len(arr) - 1]
  middle = (start + end) // 2
  # if length of arr is 0, return -1
  if len(arr) == 0:
    return -1
  else:
    # if middle equals target, return middle
    if arr[middle] == target:
      return middle
    # if middle is less than target,
    # set start equal to middle
    # call binary_search again
    elif arr[middle] < target:
      start = middle + 1
      binarySearch(arr, target)
    # if middle is greater than target,
    # set end equal to middle
    # call binary_search again
    elif arr[middle] > target:
      end = middle - 1
      binarySearch(arr, target)

array = [0, 1, 21, 33, 45, 61, 71, 72, 73]
target = 33
```

## Solution
```py
def binarySearch(array, target):
  return binarySearchHelper(array, target, 0, len(array) - 1)

def binarySearchHelper(array, target, left, right):
  while left <= right:
    middle = (left + right) // 2
    potentialMatch = arrray[middle]
    if target == potentialMatch:
      return middle
    elif target < potentialMatch:
      right = middle - 1
    else:
      left = middle + 1
  return -1
```
![binarySearch solution](/Users/petervallerie/sei/code-challenges/public/FindThreeLargestNumbersSS.png)
