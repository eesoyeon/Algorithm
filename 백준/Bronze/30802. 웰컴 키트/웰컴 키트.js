const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);

let sizes = input[1].split(' ').map(Number);
const [tshirtBundle, penBundle] = input[2].split(' ').map(Number);

let cnt = 0;
for (let size of sizes) {
    let bundle = Math.floor(size / tshirtBundle);

    cnt += !(size % tshirtBundle) ? bundle : bundle + 1;
}

const pens = Math.floor(N / penBundle);
const pen = N % penBundle;

console.log(cnt);
console.log(pens, pen);
