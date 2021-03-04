# Square of Zeroes
Write a function that takes in a square-shaped n x n two-dimensional array of only 1s and 0s an dreturns a boolean representing whether the input matrix contains a square whose borders are made up of only 0s.
Note that a 1x1 square doesn't count as a valid square for the purpose of this question. In other words, a singular `0` in the input matrix doesn't constitute a square whose borders are made up of only 0s; a square of zeroes has to be at least 2x2

## Attempt
```py
def squareOfZeroes(matrix):
  # define sides
  top = False
  bottom = False
  right = False
  left = False
  # if matrix consists of only one `0`, return "invalid"
  if matrix == [[0]]:
    return print("invalid!")

  # iterate through top of square (first sub-array in matrix)
  for num in matrix[0]:
    # if any of the nums in first sub-array are 1, top = false and break
    if num == 1:
      top = False
      break
    # elif the nums are `0`, top = true
    elif num == 0:
      top = True

  # iterate through bottom of square (last sub-array in matrix)
  for num in matrix[len(matrix) - 1]:
    # if any of the nums in last sub-array are 1, bottom = false and break
    if num == 1:
      bottom = False
      break
    elif num == 0:
      bottom = True

  # iterate through right side of square (last index of each sub-array in matrix)
  for arr in matrix:
    # if any of nums in last index of each sub-array are 1, right = false and break
    if arr[len(arr) - 1] == 1:
      right = False
      break
    elif arr[len(arr) -1] == 0:
      right = True

  # iterate through left side of square (first index of each sub-array in matrix)
  for arr in matrix:
    # if any of nums in first index of each sub-array are 1, left = false and break
    if arr[0] == 1:
      left = False
      break
    elif arr[0] == 0:
      left = True

  # check to see that ALL sides are true and return true if they are and false if not
  if top and bottom and right and left:
    return True
  else:
    return False


matrix = [
  [1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1],
  [0, 0, 0, 1, 0, 1],
  [0, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 1],
]

squareOfZeroes(matrix)
```

## Solution
![squareOfZeroes-1 solution](/Users/petervallerie/sei/code-challenges/public/SquareOfZeroes-1SS.png)
![squareOfZeroes-2 solution](/Users/petervallerie/sei/code-challenges/public/SquareOfZeroes-2SS.png)
![squareOfZeroes-3 solution](/Users/petervallerie/sei/code-challenges/public/SquareOfZeroes-3SS.png)
