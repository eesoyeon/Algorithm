const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').join('');

answer = '';
if (input === '12345678') answer = 'ascending';
else if (input === '87654321') answer = 'descending';
else answer = 'mixed';

console.log(answer);
