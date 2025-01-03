const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = 0;
const n = parseInt(input.shift());

let arr = Array.from(Array(100), () => Array(100).fill(0));
for (let i = 0; i < n; i++) {
  const [x, y] = input[i].split(' ').map(Number);

  for (row = x; row < x + 10; row++) {
    for (col = y; col < y + 10; col++) {
      if (arr[row][col] === 1) continue;
      arr[row][col] = 1;
      answer++;
    }
  }
}

console.log(answer);
