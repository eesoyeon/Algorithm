const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
let words = input.slice(1, N + 1);
let wordsInfo = {};

for (let i = 0; i < N; i++) {
    wordsInfo[words[i]] = words[i].length;
}

let sortedWords = Object.fromEntries(
    Object.entries(wordsInfo).sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        return a[1] - b[1];
    })
);

for (let key in sortedWords) {
    console.log(key);
}
