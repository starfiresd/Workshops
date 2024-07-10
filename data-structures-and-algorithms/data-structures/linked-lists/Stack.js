/* 
    ## Interview Tips ## 
    Stack is LIFO (Last In, First Out)
    Stack with array: use end of array because add/remove is O(1), beginning is O(n) because of re-index
    Stack with linked list: use beginning of list because add/remove is O(1), end is O(n) because of traverse
*/

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if(this.length === 0) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }

    pop() {
        if(this.length === 0) return undefined
        let temp = this.top
        this.top = this.top.next
        temp.next = null
        this.length--
        return temp
    }
}

let myStack = new Stack(1)
myStack.push(23)
myStack.push(3)
myStack.push(11)
myStack.pop()