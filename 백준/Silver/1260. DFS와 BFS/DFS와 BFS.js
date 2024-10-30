const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);

// 그래프
const graph = [...Array(N + 1)].map((e) => []);
for (let i = 0; i < M; i++) {
    let [from, to] = input[i + 1].split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
}

function dfs(graph, startNode) {
    const visited = [];
    let needVisit = [];

    needVisit.push(startNode);
    while (needVisit.length > 0) {
        let node = needVisit.pop();
        if (!visited.includes(node)) {
            visited.push(node);

            let nodes = graph[node];
            needVisit = [...needVisit, ...nodes.sort((a, b) => b - a)];
        }
    }
    return visited;
}

function bfs(graph, startNode) {
    const visited = [];
    let needVisit = [];

    needVisit.push(startNode); // 노드 탐색 준비

    // 방문할 노드가 남아있다면
    while (needVisit.length !== 0) {
        const node = needVisit.shift(); // 가장 오래 남아있던 노드를 뽑음

        // node 방문 여부 확인
        if (!visited.includes(node)) {
            visited.push(node);

            let nodes = graph[node];
            needVisit = [...needVisit, ...nodes.sort((a, b) => a - b)];
        }
    }

    return visited;
}

console.log(dfs(graph, V).join(' '));
console.log(bfs(graph, V).join(' '));

// 0: []
// 1: [2, 3, 4]
// 2: [1, 4]
// 3: [1, 4]
// 4: [1, 2, 3]
// console.log(graph);
