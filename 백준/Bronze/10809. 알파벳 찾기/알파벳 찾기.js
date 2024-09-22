const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let answer = [];
let alpha = 'abcdefghijklmnopqrstuvwxyz';

for (let i = 0; i < alpha.length; i++) {
    answer.push(input.indexOf(alpha[i]));
}

console.log(answer.join(' '));
