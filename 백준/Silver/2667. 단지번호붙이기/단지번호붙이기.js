const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

const map = input.map((row) => row.split('').map(Number));
const visited = Array.from(Array(N), () => Array(N).fill(false));

// 상하좌우
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

let count_home = 0;
const answer = [];

const dfs = (x, y) => {
    if (map[x][y] === 1 && !visited[x][y]) {
        visited[x][y] = true;
        count_home++;

        for (let i = 0; i < 4; i++) {
            const newX = x + dx[i];
            const newY = y + dy[i];
            if (newX >= 0 && newX < N && newY >= 0 && newY < N) {
                dfs(newX, newY);
            }
        }
    }
};

for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
        if (map[x][y] === 1 && !visited[x][y]) {
            count_home = 0;
            dfs(x, y);
            answer.push(count_home);
        }
    }
}

answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join('\n'));
