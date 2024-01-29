// Node class definition
class Node {
    // Constructor initializes a node with provided data and an empty array for neighbors
    constructor(data) {
        this.data = data;
        this.neighbors = [];
    }
}

// Edge class definition
class Edge {
    // Constructor creates an edge between two nodes
    constructor(node1, node2) {
        this.node1 = node1;
        this.node2 = node2;
    }
}

// Graph class definition
class Graph {
    // Constructor initializes an empty list of nodes and an empty list of edges
    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    // Function to add a node to the graph
    addNode(data) {
        // Create a new node with the provided data
        const newNode = new Node(data);
        // Add the new node to the graph's list of nodes
        this.nodes.push(newNode);
        // Return the new node
        return newNode;
    }

    // Function to add an edge between two nodes
    addEdge(node1, node2) {
        // Create a new edge connecting node1 and node2
        const newEdge = new Edge(node1, node2);
        // Add the new edge to the graph's list of edges
        this.edges.push(newEdge);
        // Add node2 to the neighbors of node1, and vice versa
        node1.neighbors.push(node2);
        node2.neighbors.push(node1);
    }

    // Function to test if a node exists in the graph
    nodeExists(node) {
        // Check if the provided node is present in the list of nodes
        return this.nodes.includes(node);
    }
}

// Example Usage
const myGraph = new Graph(); // Create a new graph instance

// Add nodes to the graph
const nodeA = myGraph.addNode("Abigail");
const nodeB = myGraph.addNode("Brayo");
const nodeC = myGraph.addNode("Caro");

// Add edges to establish relationships between nodes
myGraph.addEdge(nodeA, nodeB);  // Abigail -- Brayo
myGraph.addEdge(nodeB, nodeC);  // Brayo -- Caro

// Test if a node exists in the graph
const testNode = myGraph.addNode("TestPerson"); // Create a test node
console.log(myGraph.nodeExists(testNode));  // Output: false (since the test node is not added to the graph yet)
console.log(myGraph.nodeExists(nodeA));     // Output: true (Abigail is part of the graph)
