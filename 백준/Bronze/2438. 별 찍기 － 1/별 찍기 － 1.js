const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let star = '';
for (let i = 0; i < input; i++) {
    for (j = 0; j <= i; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);
