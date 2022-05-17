/*
Implementing Dijkstra's shortest path algorithm with the use of a weighted graph 
and a priority Queue.
Useful in calculating the shortest path on a map, or between vertices of a graph


*/

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // Adding a vertex(Node) to the weighted graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  // Adding an edge connecting (vertex1 and vertex2) and a weight
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  DijkStrasShortestPath(startingVertex, endingVertex) {
    const nodes = new priorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let shortestPath = []  // to return at the end
    // building up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === startingVertex) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there's something to visit in the priority queue called nodes
    while(nodes.values.length) {
      smallest = nodes.dequeue().val;
      if(smallest === endingVertex) {
        // We are done
        // build path to return at end
        while(previous[smallest]) {
          shortestPath.push(smallest);
          smallest = previous[smallest]
        }
        break;
      }
      if(smallest || distances[smallest] !== Infinity) {
        for(let neighbor in this.adjacencyList[smallest]) {
          // finding the neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          // 
          if(candidate < distances[nextNeighbor]) {
            // this is updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)

          }
        }
      }
    }

    return shortestPath.concat(smallest).reverse()
  
  }
}

class priorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

var Graph = new WeightedGraph();
Graph.addVertex("A");
Graph.addVertex("B");
Graph.addVertex("C");
Graph.addVertex("D");
Graph.addVertex("E");
Graph.addVertex("F");

Graph.addEdge("A", "B", 4);
Graph.addEdge("A", "C", 2);
Graph.addEdge("B", "E", 3);
Graph.addEdge("C", "D", 2);
Graph.addEdge("C", "F", 4);
Graph.addEdge("D", "E", 3);
Graph.addEdge("D", "F", 1);
Graph.addEdge("E", "F", 1);

console.log(Graph.DijkStrasShortestPath("A", "E"))
// console.log(Graph);
