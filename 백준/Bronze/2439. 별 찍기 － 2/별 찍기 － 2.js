const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = parseInt(fs.readFileSync(filePath).toString().trim());

for (let i = 1; i <= input; i++) {
    console.log(' '.repeat(input - i) + '*'.repeat(i));
}
