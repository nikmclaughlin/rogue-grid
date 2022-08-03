const utils = {
	getRandomInt: (min, max) => Math.floor(Math.random() * (max - min) + min),

	undirectedPath : (edges, nodeA, nodeB) => {
  
		//Create Adjancency List
		const graph = this.buildGraph(edges);
		return this.hasPath(graph, nodeA, nodeB, new Set());
	  
	  },
	  
	  hasPath : (graph, src, dst, visited) => {
		if (visited.has(src)) return false;
		if (src === dst) return true;
		
		visited.add(src);
		for (let neighbor of graph[src]){
		  if(this.hasPath(graph, neighbor, dst, visited) === true) return true;
		}
		return false;
	  },
	  
	  buildGraph : (edges) => {
		const graph = {};
		
		for (let edge of edges){
		  const [ a, b ] = edge;
		  if (!(a in graph)) graph[a] = [];
		  if (!(b in graph)) graph[b] = [];
		  graph[a].push(b);
		  graph[b].push(a);
		}
		return graph;
	  },
}

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }



export default utils;