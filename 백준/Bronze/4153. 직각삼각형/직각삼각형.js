const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
    let [A, B, C] = input[i]
        .split(' ')
        .map((e) => Number(e))
        .sort((a, b) => a - b);

    let answer = A ** 2 + B ** 2 === C ** 2 ? 'right' : 'wrong';
    console.log(answer);
}
