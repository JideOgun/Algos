/*
Stack can be implemented using an array using the shift and unshift methods
Also a an array stack can be impelmented using a pop, and push method
Pop & push are more efficient than shift & unshift,  because shift and unshift add/remove from the beginning
of the array causing the entire array to reindex itself.

Stacks follow LIFO principle - Last In First Out

Stacks can be implemented using a Singly Linked List
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first last and size are changed just for changing sake, head, tail and length still mean the same thing.
class Stack {
  constructor() {
    this.first = 0;
    this.last = null;
    this.size = null;
  }

  // Push - this is operating backwards from the singly linked list push because we want constant time
  // we want to remove from the front .... so pretty much shift and unshift
  // pretty much inserting values to the beginning  of the list to mimic a LIFO stack structure
  // Adding and Removing from the beginning of a list is constant time, because trying to get the last node 
  // in a list is going to traverse the entire list and that is not efficient
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
        var temp = this.first;
        this.first = newNode;
        this.first.next = temp; 
    }
    return ++this.size;
  }

  // pop - This will follow the Last In First Out priciple
  // The last node added will be the first to be popped out of the list
  // The last node will also be at the beginning of the list
  pop() {
    if(!this.first) return null;
    if(this.first === this.last) {
        this.last = null;
    }
    var temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.val;

  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
console.log(stack);