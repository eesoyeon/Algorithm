const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

const deque = [];

for (let i = N; i >= 1; i--) {
  deque.unshift(i);

  for (let j = 0; j < i; j++) {
    deque.unshift(deque.pop());
  }
}

console.log(deque.join(' '));
