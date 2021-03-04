# Spiral Traverse
Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in spiral order.

Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the way until every element has been visited.

## Attempt
```py
def spiralTraverse(array):
  output = []
  topLeft = array[0][0]
  topRight = array[0][len(subArr) - 1]
  bottomRight = array[len(array) - 1][len(subArr) - 1]
  bottomLeft = array[len(array) - 1][0]

  # iterate through first array in given array and add each element to output
  for num in array[0]:
    output.append(num)

  # iterate through each sub array and add last num to output
  for subArr in array:
    output.append(subArr[len(subArr) - 1])

  return output


array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
]
```

## Iterative Solution
```py
# O(n) time | O(n) space - where n is the total number of elements in the array
def spiralTraverse(array):
  result = []
  startRow, endRow = 0, len(array) - 1
  startCol, endCol = 0, len(array[0]) - 1

  while startRow <= endRow and startCol <= endCol:
    # add top row
    for col in range(startCol, endCol + 1):
      result.append(array[startRow][col])

    # add right column
    for row in range(startRow + 1, endRow + 1):
      result.append(array[row][endCol])

    # add bottom row
    for col in reversed(range(startCol, endCol)):
      if startRow == endRow:
        break
      result.append(array[endRow][col])

    # add left column
    for row in reverse(range(startRow + 1, endRow)):
      if startCol == endCol:
        break
      result.append(array[row][startCol])

    startRow += 1
    endRow -= 1
    startCol += 1
    endCol -= 1

  return result
```

## Recursive Solution
```py
# O(n) time | O(n) space - where n is the total number of elements in the array
def spiralTraverse(array):
  result = []
  spiralFill(array, 0, len(array) - 1, 0, len(array[0]) - 1, result)
  return result

def spiralFill(array, startRow, endRow, startCol, endCol, result):
  if startRow > endRow or startCol > endCol:
    return

  # add top row to result
  for col in range(startCol, endCol + 1):
    result.append(array[startRow][col])

  # add right column to result
  for row in range(startRow + 1, endRow + 1):
    result.append(array[row][endCol])

  # add bottom row to result
  for col in reversed(range(startCol, endCol)):
    if startRow == endRow:
      break
    result.append(array[endRow][col])

  # add left column to result
  for row in reversed(range(startRow + 1, endRow)):
    if startCol == endCol:
      break
    result.append(array[row][startCol])

  spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endcol -1, result)
```
