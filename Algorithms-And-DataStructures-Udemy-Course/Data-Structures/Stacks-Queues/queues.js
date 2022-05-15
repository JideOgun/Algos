/*
Queue follows a FIFO   - First In First Out
Whatever comes in first, comes out first ... A queue.

A queue can be implemented using an Array, by using push and unshift built in array methods
It's not performant because unshift causes the array to be reindexed


when its added -- it adds to the tail
when nodes are removed - it removes from the head
FIFO!!!!
A queue can also be implemented with a Singly Linked List
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size;
    }

    // Adds to the end of the queue
    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode
        }
        return ++this.size;
    }

    // Removes from the head of the queue
    dequeue() {
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}
