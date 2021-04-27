# Node Depths
The distance between a node in a Binary Tree and the tree's root is called the node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.

Each `BinaryTree` node has an integer `value`, a `left` child node, and a `right` child node. Children nodes can either be `BinaryTree` nodes themselves or `None` / `null`.

## Attempt
```js
const nodeDepths = root => {
    // base case: when root === null || None
    if (!root) {
        return 0
    }

    // recursion: keep adding 1 for each child node until we reach base case
    return 1 + (nodeDepths(this.left) + nodeDepths(this.right))
}

// class of input Binary Tree
class BinaryTree {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
```

## Solution
```js
// recursive
const nodeDepths = (root, depth = 0) => {
    // base case
    if (root === None) {
        return 0
    }

    // recursion
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

// iterative
const nodeDepths = root => {
    sumOfDepths = 0
    stack = [{"node": root, "depth": 0}]

    while stack.length > 0 {
        nodeInfo = stack.pop()
        node, depth = nodeInfo["node"], nodeInfo["depth"]
        if (node === None) {
            contiinue
        }
        sumOfDepths += depth
        stack.append({"node": node.left, "depth": depth + 1})
        stack.append({"node": node.right, "depth": depth + 1})
    }
    return sumOfDepths
}
```