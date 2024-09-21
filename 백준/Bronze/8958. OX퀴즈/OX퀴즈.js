const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
    let result = input[i].split('X');

    let score = 0;
    for (j = 0; j < result.length; j++) {
        let n = result[j].length;
        score += (n * (n + 1)) / 2;
    }
    console.log(score);
}

// n(n+1)/2
