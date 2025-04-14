const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const houses = input[1].split(' ').map(Number);

const sortedHouses = houses.sort((a, b) => a - b);
const mid = Math.floor((houses.length - 1) / 2);

console.log(sortedHouses[mid]);
