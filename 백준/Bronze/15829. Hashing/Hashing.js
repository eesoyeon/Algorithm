const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const L = parseInt(input[0]);
let str = input[1];

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const r = 31;
const M = 1234567891;
let i = 0;

let hash = 0;
for (let j = 0; j < L; j++) {
    let a = alphabet.indexOf(str[j]) + 1;

    hash += a * r ** i;
    i += 1;
}

if (hash.toString().length > 16) {
    hash = parseInt(hash / M);
}

console.log(hash);
