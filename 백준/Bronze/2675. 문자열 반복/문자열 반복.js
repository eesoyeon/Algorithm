const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i < T + 1; i++) {
    let [R, S] = input[i].split(' ');
    R = Number(R);

    let P = '';
    for (let j = 0; j < S.length; j++) {
        P += S[j].repeat(R);
    }
    console.log(P);
}