// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// // Iterative approach

// // const depthFirstValues = (root) => {
// //   if (root === null) return [];
// //   const results = [];
// //   const stack = [root];

// //   while (stack.length > 0) {
// //     const current = stack.pop();
// //     results.push(current.val);

// //     if (current.right) stack.push(current.right);
// //     if (current.left) stack.push(current.left);
// //   }
// //   console.info(results);
// //   return results;
// // };

// // depthFirstValues(a);

// // recursive approach

// const depthFirstValues = (root) => {
//     if(root === null) return [];
//     const leftValues = depthFirstValues(root.left);
//     const rightValues = depthFirstValues(root.right);
//     let results = [ root.val, ...leftValues, ...rightValues]
//     console.info(results)
//     return [ root.val, ...leftValues, ...rightValues];
// }

// depthFirstValues(a);

let firstName = "Joe";
lastName = "Smith";
console.log(this.firstName)
