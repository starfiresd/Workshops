/* 
    ## Interview Tips ## 
    Queue is FIFO (First In, First Out)
    Queue with array: enqueue/dequeue will be O(1) on one side and O(n) on the other regardless of starting side
    Queue with linked list: dequeue from start because poping from end is O(n), where shift from beginning is O(1)
                                both push and unshift are O(1)
*/

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }

    enqueue(value) {
        const newNode = new Node(value)
        
        if(this.length === 0){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }  
        this.length++
        return this
    }

    dequeue() {
        if(this.length === 0) return undefined
        
        let temp = this.first
        if(this.length === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
            temp.next = null
        }
        this.length--
        return temp
    }
}

let myQueue = new Queue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.dequeue();