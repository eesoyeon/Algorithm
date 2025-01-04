const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const N = parseInt(input);

let dotNumber = (2 ** N + 1) ** 2;
console.log(dotNumber);
