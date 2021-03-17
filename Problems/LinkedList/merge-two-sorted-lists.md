# Merge Two Sorted Lists
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:
![merge sorted lists](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)
```
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:
```
```
Input: l1 = [], l2 = []
Output: []
Example 3:
```
```
Input: l1 = [], l2 = [0]
Output: [0]
```

Constraints:
`The number of nodes in both lists is in the range [0, 50].`
`-100 <= Node.val <= 100`
`Both l1 and l2 are sorted in non-decreasing order.`

## Attempt
```py
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
#         add both linked list node values to array
#         accumulator array
        list_of_nodes = []
#         iterate through 1st linked list
        while l1 and l2:
#             add node val to list_of_nodes
            list_of_nodes.append(l2.val)
            list_of_nodes.append(l1.val)
#             move to next node
            l2 = l2.next
            l1 = l1.next

#         sort list_of_nodes
        sorted_nodes_list = sorted(list_of_nodes)

#         iterate through sorted_nodes_list
        for i in range(len(sorted_nodes_list)):
```

## Solution
```py
# iteratively
def mergeTwoLists1(self, l1, l2):
    dummy = cur = ListNode(0)
    while l1 and l2:
        if l1.val < l2.val:
            cur.next = l1
            l1 = l1.next
        else:
            cur.next = l2
            l2 = l2.next
        cur = cur.next
    cur.next = l1 or l2
    return dummy.next

# recursively
def mergeTwoLists2(self, l1, l2):
    if not l1 or not l2:
        return l1 or l2
    if l1.val < l2.val:
        l1.next = self.mergeTwoLists(l1.next, l2)
        return l1
    else:
        l2.next = self.mergeTwoLists(l1, l2.next)
        return l2
```
