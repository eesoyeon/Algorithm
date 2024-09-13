const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);
let numbers = input[1].split(' ').map((e) => Number(e));

let max = numbers[0];
let min = numbers[0];

for (let i = 0; i < N; i++) {
    if (max < numbers[i]) max = numbers[i];
    if (min > numbers[i]) min = numbers[i];
}

console.log(`${min} ${max}`);
