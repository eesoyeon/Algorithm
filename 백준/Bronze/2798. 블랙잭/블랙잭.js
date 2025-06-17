const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const card = input[1].split(' ').map(Number);

let answer = 0;
for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
        for (let k = j + 1; k < N; k++) {
            let sum = card[i] + card[j] + card[k];
            if (sum <= M && sum > answer) {
                answer = sum;
            }
        }
    }
}

console.log(answer);
