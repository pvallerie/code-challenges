# Longest Peak
Write a function that takes in an array of integers and returns the length of the longest peak in the array.

A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak), at which point they become strictly decreasing. At least three integers are required to form a peak.

For example, the integers `1, 2, 4, 10, 2` form a peak, but the integers `4, 0, 10` don't and neither do the integers `1, 2, 2, 0`. Similarly, the integers `1, 2, 3` don't form a peak because there aren't any strictly decreasing integers after `3`.

## Attempt
- What would you like me to return if there are no peaks?
- Can the integers be negative?

```py
def longestPeak(array):
  currentPeakLength = 0
  largestPeakLength = 0
  left = 0
  right = 2

  # iterate through given array, starting at index 1 because peaks cannot exist at the beggining or end of array
  for i in range(1, len(string)):
    # if i is a peak
    if i > i - 1 and i > i + 1:
      # set currentPeakLength to abs(right - left)
      currentPeakLength = right - left
      # set right to right + 1 and compare i to that
      right += 1

    # if it is not
    else:
      # move peak to next integer and move left and right over one
      left += 1
      right += 1

  return largestPeakLength
```

## Solution
```py
def longestPeak(array):
  # variable to store longest peak length
  longestPeakLength = 0
  # set i to be 1 since a peak can't live at beginning of array
  i = 1
  # iterate through array from i until the second to last index because peak can't live at end of array
  while i < len(array) - 1:
    # check to see if adjacent values are smaller than current value (checking if peak)
    isPeak = array[i - 1] < array[i] and array[i] > array[i + 1]
    # if it is not a peak, continue
    if not isPeak:
      i += 1
      continue

    # if we did find a peak
    # set pointer on value to the left
    leftIdx = i - 2
    # iterate to the left to see how far the left slope goes
    # stop once we hit the beginning of the array or once the current index is less than the one to its left
    while leftIdx >= 0 and array[leftIdx] < array[leftIdx + 1]:
      leftIdx -= 1

    # set point on value to the right
    rightIdx = i + 2
    # iterate to the right to see how far the right slope goes
    # stop once we hit the end of the array or once the current index is less than the one to its right
    while rightIdx < len(array) and array[rightIdx] < array[rightIdx - 1]:
      rightIdx += 1

    # compute length of peak
    # set currentPeakLength to the difference of rightIdx and leftIdx minus 1
    currentPeakLength = rightIdx - leftIdx - 1
    # compare longestPeakLength to currentPeakLength and make longestPeakLength whatever is bigger
    longestPeakLength = max(longestPeakLength, currentPeakLength)
    # move i to the far right of the current peak's right slope
    i = rightIdx
  return longestPeakLength
```
