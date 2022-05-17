/*
Adjancency List or Adjacency Matrix can be used to store the relationships in graphs
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Adding a vertex(Node) to the graph
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // adding an edge connecting (vertex1 and vertex2) using an adjacency list
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // removing an edge
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (vertex) => vertex !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (vertex) => vertex !== v2
    );
  }

  // removing a vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjancentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjancentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  // Depth first traversal recursively
  DFS_recursive(startingVertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }
    dfs(startingVertex);

    return result;
  }

  // Depth first traversal of a graph done iteratively using a stack
  DFS_iterative(startingVertex) {
    const visited = {};
    const result = [];
    const stack = [startingVertex];
    let currentVertex;

    visited[startingVertex] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  // Breadth first traversal of a graph using a queue
  BFS(startingVertex) {
    const queue = [startingVertex];
    const visited = {};
    const result = [];
    let currentVertex;

    visited[startingVertex] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

var G = new Graph();
G.addVertex("A");
G.addVertex("B");
G.addVertex("C");
G.addVertex("D");
G.addVertex("E");
G.addVertex("F");

G.addEdge("A", "B");
G.addEdge("A", "C");
G.addEdge("B", "D");
G.addEdge("C", "E");
G.addEdge("D", "E");
G.addEdge("D", "F");
G.addEdge("E", "F");

// console.log(G.DFS_recursive("A"));
// console.log(G.DFS_iterative("A"));
console.log(G.BFS("A"))
// console.log(G);
