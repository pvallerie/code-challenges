# Reverse Linked List

## Attempt
```py
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        list_array = []
        curr_node = head
        # curr_next = head.next

        if not head:
            return None

        else:
            while curr_node != None:
                list_array.append(curr_node.val)
                curr_node = curr_node.next

            return list_array.reverse()
```

## Solution
```py
# iterative
def reverseList(self, head):
    prev = None
    while head:
        curr = head
        head = head.next
        curr.next = prev
        prev = curr
    return prev

# recursive
def reverseList(self, node, prev=None):
    if not node:
        return prev
    n = node.next
    node.next = prev
    return self._reverse(n, node)
```
