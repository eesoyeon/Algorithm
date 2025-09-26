const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const N = parseInt(fs.readFileSync(filePath).toString().trim());

const cards = Array.from({ length: N }, (_, i) => i + 1);

let start = 0;
let end = N;

while (end - start > 1) {
  start++;
  cards[end++] = cards[start++];
}

console.log(cards[start]);
