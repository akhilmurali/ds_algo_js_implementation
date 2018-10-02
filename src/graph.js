class Graph {
    constructor(noOfVertices) {
        this.vertices = noOfVertices;
        this.adjList = new Map();
    }

    //Functions to be implemented:
    addVertex(v) {
        this.adjList.set(v, []);
    }
    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    printGraph() {
        var all_keys = this.adjList.keys();
        for (var i of all_keys) {
            var get_values = this.adjList.get(i);
            var conc = "";
            for (var j of get_values) {
                conc += " " + j;
            }
            console.log(i + "->" + conc);
        }
    }

    bfs(v) {
        //Initialize the stack to an empty array:
        let stack = [],
            visited = [];
        if (this.adjList.get(v)) {
            stack.push(v);
            visited[v] = true;
            while (stack.length != 0) {
                let node = stack.shift();
                let list = this.adjList.get(node);
                for (var i of list) {
                    if (visited[i] != true) {
                        visited[i] = true;
                        stack.push(i);
                    }
                }
                console.log(node);
            }
        } else {
            console.log("Node not found");
        }
    }

    dfs(v) {
        var visited = [], nodeList = [];
        if (this.adjList.get(v)) {
            nodeList.push(v);
            let k = 0;
            while (nodeList.length > 0) {
                let node = nodeList.shift();
                console.log(node);
                visited[node] = true; 
                let tempList = this.adjList.get(node);
                for (var i of tempList) {
                    console.log('i value :' +  i);
                    if (visited[i]) {
                        console.log(tempList.indexOf(i));
                        if(tempList.indexOf(i)){
                            tempList[tempList.indexOf(i)] = 0;
                        }
                    }
                    visited[i] = true;
                }
                for(i=0; i < tempList.length; i++){
                    if(tempList[i] == 0){
                        tempList.splice(i,1);
                    }
                }
                if(tempList.length > 0){
                    nodeList = tempList.concat(nodeList);
                }
            }
        }
    }
}

var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();
g.bfs("A");
console.log('DFS');
g.dfs('A');
