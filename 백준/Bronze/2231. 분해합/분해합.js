const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const N = parseInt(fs.readFileSync(filePath).toString().trim());

// 1~9 = 0
// 10 = 5 + 5
// 11 = 10 + (1 + 0)
// 256 = 245 + (2 + 4 + 5)
// 999999 =
// abc + a + b + c
// 가장 작은 생성자, 없으면 0

let answer = 0;

for (let i = 1; i < N; i++) {
    let M = i;
    let sum = 0;
    while (M > 0) {
        sum += M % 10;
        M = parseInt(M / 10);
    }
    sum += i;
    if (sum === N) {
        answer = i;
        break;
    }
}

console.log(answer);
