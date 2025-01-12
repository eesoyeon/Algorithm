const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let cnt = 0;
let answer = 0;
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    cnt += 1;
    answer = i;
  }
  if (cnt === K) {
    break;
  }
}

if (cnt < K) {
  answer = 0;
}

console.log(answer);
