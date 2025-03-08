const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const answer = [];

for (let i = 0; i < input.length - 1; i++) {
  const lengthArr = input[i].split(' ').map(Number);

  const [a, b, c] = lengthArr.sort((a, b) => a - b);
  if (a + b <= c) {
    answer.push('Invalid');
  } else {
    const lengthSet = new Set(lengthArr);

    if (lengthSet.size === 1) {
      answer.push('Equilateral');
    } else if (lengthSet.size === 2) {
      answer.push('Isosceles');
    } else {
      answer.push('Scalene');
    }
  }
}

console.log(answer.join('\n'));
