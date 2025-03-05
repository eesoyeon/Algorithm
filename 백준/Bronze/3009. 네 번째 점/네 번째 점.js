const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arrX = [];
const arrY = [];
const answer = [];

for (let i = 0; i < 3; i++) {
  arrX.push(input[i].split(' ').map(Number)[0]);
  arrY.push(input[i].split(' ').map(Number)[1]);
}

arrX.sort();
arrY.sort();

answer[0] = arrX[0] === arrX[1] ? arrX[2] : arrX[0];
answer[1] = arrY[0] === arrY[1] ? arrY[2] : arrY[0];

console.log(answer.join(' '));
