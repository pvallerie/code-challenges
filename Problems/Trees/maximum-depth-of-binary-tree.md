# Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example:<br>
![Binary Tree](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)
```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

## Attempt
```py
def maxDepth(self, root: TreeNode) -> int:
    # if root length is 1
    if len(root) == 1:
        # return 1
        return 1
    # else
    else:
        # return half of length of root, rounded down
        return len(root) // 2
```

## Solution
```py
def maxDepth(root):
  # Null node has 0 depth.
  if not root:
    return 0

  # recursively check left and right nodes, compare, and add one to the larger to account for the root
  return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```
