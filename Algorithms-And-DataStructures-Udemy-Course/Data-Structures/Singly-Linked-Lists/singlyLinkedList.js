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
    if (index < 0 || index >= this.length) return undefined;
    var count = 0;
    var current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  // updates an exisiting node at an index, does not increase length of list, only updates it.
  set(index, val) {
    var foundNode = this.get(index);
    console.log(
      "this is the foundNone - " + foundNode,
      "& this is the value - " + val
    );
    if (foundNode) {
      foundNode.val = val;
      console.log(list);
      return true;
    }
    return false;
  }

  // inserts a new node at the specified index and increases the length of the list.
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    var newNode = new Node(val);
    if (index === 0) {
      // !! return boolean value not not false..which is true
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    var prevNode = this.get(index - 1);
    var temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    console.log(this.get(5));
    return true;
  }

  // removes from an index ... shortens the length of the list
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) {
      this.pop();
      return this;
    } else if (index === 0) {
      this.shift();
      return this;
    } else {
      var prevNode = this.get(index - 1);
      var removed = this.get(index);
      prevNode.next = removed.next;
      this.length--;
      return removed.val;
    }
  }

  // reverses the list
  reverse() {
    var current = this.head;
    this.head = this.tail;
    this.tail = current;
    var next;
    var prev = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
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
// console.log(list.set(1, 'Pleasure'));
// console.log(list);
// console.log(list.insert(7, "Jide!!!"));
// console.log(list.remove(2));
console.log(list.reverse());
list.print()