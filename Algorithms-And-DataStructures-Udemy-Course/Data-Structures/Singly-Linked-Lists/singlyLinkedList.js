class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // pushing into the end of the list i.e the tail of the list
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // removing from the end of the list i.e the tail of the list
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    // for when the list only has one item
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // removing the first node i.e the head and making the next node the new head
  shift() {
    if (!this.head) return undefined;
    var current = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  // adding to the beginning of the list...the first node i.e the head of the list
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      var current = this.head;
      this.head = newNode;
      this.head.next = current;
    }
    this.length++;
    return this;
  }

  get(index) {
    if(index < 0 || index >= this.length) return undefined;
    var count = 0;
    var current = this.head;
    while(count !== index) {
        current = current.next;
        count++;
    }
    return current;
  }

  set(index, val) {
   var foundNode = this.get(index);
console.log('this is the foundNone - ' + foundNode, '& this is the value - ' + val);
   if(foundNode) {
       foundNode.val = val;
       console.log(list);
       return true;
   }
   return false;
  }
}

var list = new SinglyLinkedList();
// Pushing into the list
list.push("Hello");
list.push("nice");
list.push("to");
list.push("meet");
list.push("you");
list.push("Goodbye");
list.push("!");
// console.log(list);
// list.unshift("Jide");
// console.log(list);
console.log(list.set(1, 'Pleasure'));
// console.log(list);
