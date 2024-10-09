const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const L = parseInt(input[0]);
let str = input[1];

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let r = 1;
const M = 1234567891;

let hash = 0;
for (let i = 0; i < L; i++) {
    let a = alphabet.indexOf(str[i]) + 1;

    hash += a * r;
    r *= 31;
    r %= M;
}

console.log(hash % M);
