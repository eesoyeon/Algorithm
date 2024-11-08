const { dir } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// dfs? ㄴㄴ bfs, 경로의 특징을 알아야 된다 => 큐

// 가로 M, 세로 N
const T = parseInt(input.shift());

const directions = [
    [0, 1], // 오른쪽
    [0, -1], //왼쪽
    [1, 0], // 아래
    [-1, 0], // 위
];

function bfs(y, x, farm, visited, M, N) {
    const queue = [[y, x]];
    visited[y][x] = true;

    while (queue.length > 0) {
        const [curY, curX] = queue.shift();

        for (const [dy, dx] of directions) {
            const newY = dy + curY;
            const newX = dx + curX;

            if (
                newY >= 0 &&
                newY < N &&
                newX >= 0 &&
                newX < M &&
                farm[newY][newX] === 1 &&
                !visited[newY][newX]
            ) {
                visited[newY][newX] = true;
                queue.push([newY, newX]);
            }
        }
    }
}

for (let t = 0; t < T; t++) {
    // 가로 M, 세로 N
    const [M, N, K] = input.shift().split(' ').map(Number);

    // N행 M열
    const farm = Array.from({ length: N }, () => Array(M).fill(0));
    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    for (let i = 0; i < K; i++) {
        const [x, y] = input.shift().split(' ').map(Number);
        farm[y][x] = 1;
    }

    let wormCount = 0;

    for (let y = 0; y < N; y++) {
        for (let x = 0; x < M; x++) {
            if ((farm[y][x] === 1) & !visited[y][x]) {
                bfs(y, x, farm, visited, M, N);
                wormCount++;
            }
        }
    }
    console.log(wormCount);
}
