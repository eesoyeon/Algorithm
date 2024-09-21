const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
let numbers = input[1].split('');

let sum = 0;
for (let i = 0; i < N; i++) {
    sum += parseInt(numbers[i]);
}

console.log(sum);
