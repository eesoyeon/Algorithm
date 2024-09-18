const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let wordsArr = input.split(' ');

let cnt = 0;
for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] != '') {
        cnt++;
    }
}

console.log(cnt);
