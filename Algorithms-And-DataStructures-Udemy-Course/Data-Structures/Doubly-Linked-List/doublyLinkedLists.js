class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Methods
  // Push - adding a node to the end of the doubly linked list
  push(val) {
    var newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // pop - removes a node from the end of the doubly linked list
  pop() {
    if (this.head === null) return undefined;
    var poppedTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedTail.prev;
      this.tail.next = null;
      poppedTail.prev = null;
    }
    this.length--;
    return poppedTail;
  }

  // Shift - remove the first node i.e the head of the list
  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      var oldhead = this.head;
      this.head = oldhead.next;
      this.head.prev = null;
      oldhead.next = null;
    }

    this.length--;
    return oldhead;
  }

  // unshift - inserts a new node and set it to be the head of the list
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get - Accessing the value of a node in a doubly linked list
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    var mid = this.length / 2;
    if (index <= mid) {
      var count = 0;
      var current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      count = this.length - 1;
      var current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  // set - replaces the value of a node in the doubly linked list
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  // insert - creates a new node and adds the node at a specified index in a doubly linked list
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;
    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++;
    return true;
  }

  // Remove - removing a node in a DLL by a certain position/index
  remove(index) {
      if(index < 0 || index >= this.length) return undefined;
      if(index === 0) return this.shift;
      if(index === this.length - 1) return this.pop();
      var removedNode = this.get(index);
      var beforeNode = removedNode.prev;
      var afterNode = removedNode.next;
     beforeNode.next = afterNode;
     afterNode.prev = beforeNode;
      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
      return removedNode;
  }
}

var list = new doublyLinkedList();
list.push(1.6);
list.push(2.4);
list.push(5);
list.push(6.9);
list.insert(1, 2.0)
// list.unshift(0.5);
// list.pop(6.9);
// console.log(list.push(9))
console.log(list);
