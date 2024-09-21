const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, X] = input[0].split(' ').map((e) => Number(e));

let A = input[1].split(' ').map((e) => Number(e));

let arr = [];
for (let i = 0; i < N; i++) {
    if (A[i] < X) {
        arr.push(A[i]);
    }
}

console.log(arr.join(' '));
