const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    let [A, B] = input[i].split(' ').map((e) => Number(e));
    console.log(A + B);
}
