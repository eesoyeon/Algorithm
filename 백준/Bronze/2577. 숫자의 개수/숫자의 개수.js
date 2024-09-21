const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const [A, B, C] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((e) => Number(e));

let multi = (A * B * C).toString();

for (let i = 0; i < 10; i++) {
    console.log(multi.split(i.toString()).length - 1);
}
