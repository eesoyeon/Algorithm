const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.split(' ').map(Number));

const X = input[0][0];
const N = input[1][0];

let total_price = 0;
for (let i = 2; i < 2 + N; i++) {
    total_price += input[i][0] * input[i][1];
}

let answer = total_price === X ? 'Yes' : 'No';
console.log(answer);
