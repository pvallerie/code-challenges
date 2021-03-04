# Sorted Squared Array
Write a function that takes in a non-empty sorted array of integers and returns a new array of the sam length with the squares fo the original integers sorted in increasing order.

## Attempt
```py
def sortedSquaredArray(array):
  # define accumulator
  newArray = [0 for _ in array]
  # iterate through given array
  for num in array:
    # square the num
    squaredNum = num * num
    # if newArray is empty, just insert squaredNum
    if newArray == []:
      newArray.append(squaredNum)
    # iterate through newArray and insert squaredNum in the correct spot
    else:
      for i in newArray:
        numIndex = newArray.index(i)
        if i > squaredNum:
          # add it to the newArray one before current index
          newArray.insert(numIndex - 1, squaredNum)

  return newArray


array = [1, 2, 3, 5, 6, 8, 9]
sortedSquaredArray(array)
```


## Solution
```py
def sortedSquaredArray(array):
  sortedSquares = [or for _ in array]
  smallerValueIdx = 0
  largerValueIdx = len(array) - 1

  for idx in reversed(range(len(array))):
    smallerValue = array[smallerValueIdx]
    largerValue = array [largerValueIdx]

    if abs(smallerValue) > abs(largerValue):
      sortedSquares[idx] = smallerValue * smallerValue
      smallerValueIdx += 1
    else:
      sortedSquares[idx] = largerValue * largerValue
      largerValueIdx -= 1

  return sortedSquares
```
