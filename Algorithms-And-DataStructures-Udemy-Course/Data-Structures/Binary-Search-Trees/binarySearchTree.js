/*
Binary Search Tree is a type of Binary Tree where the  left child node is smaller/less than the parent node,
 and the right child node is greter than the parent node


*/

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Inserting a node into the BST
  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  // Find/Search - finding a node in a BST
  search(val) {
    if (!this.root) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  // Breadth First Search
  BFS() {
    var data = [];
    var queue = [];
    var node = this.root;
    queue.push(node);
    while(queue.length) {
        node = queue.shift();
        data.push(node.val);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return data;
}

// Depth First Search - preorder
DFSPreOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
        data.push(node.val);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(current)
    return data;
}

DFSPostOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.val);
    }
    traverse(current);
    return data;
}


DFSInOrder() {
    var data = [];
    var current = this.root;
    function traverse(node) {
        if(node.left) traverse(node.left);
        data.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(current);
    return data;
}
}

var tree = new BST();
tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree);
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
