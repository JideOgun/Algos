/*
A max binary heap, parent nodes are always larger than the child nodes
Min Binary Heap, the parent nodes are always smaller than the child nodes

In a Max Binary Heap - if stored in an array, and the index = n,  the left child is stored at 2n + 1, the right child is stored at 2n + 2
To find the parent of any child node at index = n, parent = Math.floor((n-1)/2)
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // inserting elements into a heap
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  // Extract max - extracting the max element in the heap and reorganizing the nodes to follow the rules of a heap
  // which is the the child nodes must be less than the parent nodes
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

var heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(56);
heap.insert(199);
console.log(heap);
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
console.log('this is extracted max value ' + heap.extractMax());
console.log('this is extracted max value ' + heap.extractMax());
console.log('this is extracted max value ' + heap.extractMax());
console.log('this is extracted max value ' + heap.extractMax());
console.log('this is extracted max value ' + heap.extractMax());
console.log('this is extracted max value ' + heap.extractMax());
console.log(heap);
