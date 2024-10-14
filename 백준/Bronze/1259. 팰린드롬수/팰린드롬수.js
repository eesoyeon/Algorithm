const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// 길이가 홀수인 경우만 확인하기

for (let num of input) {
    if (num === '0') break;

    let reversed = num.split('').reverse().join('');

    if (reversed === num) console.log('yes');
    else console.log('no');
}
