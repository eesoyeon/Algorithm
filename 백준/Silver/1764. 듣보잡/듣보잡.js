const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const notHeard = input.slice(0, N);
const notSeen = new Set(input.slice(N));

const notHeardSeen = notHeard.filter((name) => notSeen.has(name)).sort();

const size = notHeardSeen.length;

console.log(size);
console.log(notHeardSeen.join('\n'));
