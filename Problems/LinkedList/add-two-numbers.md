# Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Attempt
```js
var addTwoNumbers = function(l1, l2) {
    
    //  helper to convert linked list to an int
    const convertLinkedListToInt = list => {
        // list to store nums from list
        const listNum = []

        // pointer
        let currNode = list

        // iterate through linked list
        while (currNode.next) {
            // prepend node.val into listNum
            listNum.unshift(currNode.val)
            // move to next node in linked list
            currNode.val = currNode.next.val
            currNode.next = currNode.next.next
        }
        // prepend final val in linked list
        listNum.unshift(currNode.val)

        // convert listNum to int
        const listNumStr = listNum.join('')
        const parsedStr = parseInt(listNumStr)

        return parsedStr
    }
    
    
    
    // variables to store numbers
    const listOneNum = convertLinkedListToInt(l1)
    const listTwoNum = convertLinkedListToInt(l2)
    
    // add list numbers together and store in sum variable
    const sum = listOneNum + listTwoNum
    // convert sum to a string
    const sumStr = sum.toString()
    
    // node class
    class Node {
        constructor(value) {
            this.val = value
            this.next = null
        }
    }
    
    // linked list class
    class LinkedList {
        constructor() {
            this.head = null
        }
        addNode(value) {
            // create node useing Node constructor           
            let newNode = new Node(value)
            
            // if this is first node, set as head
            if (!this.head){ 
                this.head = newNode
            // otherwise, look for last node in list             
            } else {
                let currNode = this.head
                // iterate through linked list until our currNode has no next value
                while (!!currNode.next) {
                    currNode = currNode.next
                }
                currNode.next = newNode
            }
            return newNode
        }
    }
    
    // create empty linked list from LinkedList constructor
    const outputList = new LinkedList()
    
    // iterate backwards through sumStr
    for (let i = sumStr.length - 1; i >= 0; i--) {
        // create new node for current character in sum
        // add it to the end of our outputList         
        outputList.addNode(parseInt(sumStr[i]))
    }
    
    // return head of sum linked list
    return outputList.head
};
```