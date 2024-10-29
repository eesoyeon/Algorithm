const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const users = input.slice(1, N + 1).map((e) => e.split(' '));

const sortedUsers = users.sort((a, b) => a[0] - b[0]);

sortedUsers.forEach((v) => console.log(v.join(' ')));
