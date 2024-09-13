const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((e) => Number(e));

let mod = [];

for (let i = 0; i < 10; i++) {
    mod.push(input[i] % 42);
}

let answer = [];
mod.forEach((e) => {
    if (!answer.includes(e)) answer.push(e);
});

console.log(answer.length);
