const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [NM, ...arr] = input;
const [N, M] = NM.split(' ').map(Number);

let answer = [];

const whiteBoard = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
];

const blackBoard = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
];

function paintWhiteFirst(x, y) {
    let cnt = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (arr[i + x][j + y] !== whiteBoard[i][j]) cnt++;
        }
    }
    return cnt;
}

function paintBlackFirst(x, y) {
    let cnt = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (arr[i + x][j + y] !== blackBoard[i][j]) cnt++;
        }
    }
    return cnt;
}

for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
        answer.push(paintWhiteFirst(i, j));
        answer.push(paintBlackFirst(i, j));
    }
}

console.log(Math.min(...answer));
