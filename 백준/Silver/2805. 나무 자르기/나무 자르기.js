const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);

const trees = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

function solution(arr, target) {
    let start = 0;
    let end = arr[arr.length - 1];
    let answer = 0;
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        let sum = 0;
        for (let x of arr) {
            if (x > mid) sum += x - mid;
        }
        if (sum >= target) {
            if (mid > answer) {
                answer = mid;
            }
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return answer;
}

console.log(solution(trees, M));
