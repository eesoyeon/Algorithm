const { dir } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => false);

for (let i = 0; i < M; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

const dfs = (node) => {
    visited[node] = true;

    for (let i of graph[node]) {
        if (!visited[i]) {
            dfs(i);
        }
    }
};

let cnt = 0;
for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        dfs(i);
        cnt++;
    }
}

console.log(cnt);
