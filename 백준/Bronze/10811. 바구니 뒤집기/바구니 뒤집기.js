const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((e) => Number(e));

let basket = Array.from({ length: N }, (v, i) => i + 1); // 배열 한줄로 초기화

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map((e) => Number(e));

    let arr = [];
    for (let j = a - 1; j < b; j++) {
        arr.push(basket[j]);
    }
    arr.reverse();
    basket.splice(a - 1, b - a + 1, ...arr);
}

console.log(basket.join(' '));
