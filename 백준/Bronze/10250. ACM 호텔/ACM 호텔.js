const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = parseInt(input[0]);

for (let i = 1; i < T + 1; i++) {
    // H층, W개 방, N번째 손님
    let [H, W, N] = input[i].split(' ').map((e) => Number(e));

    let floor = N % H != 0 ? N % H : H;
    let number = N % H != 0 ? parseInt(N / H) + 1 : parseInt(N / H);

    if (number < 10) {
        number = '0' + number;
    }

    console.log(floor.toString() + number);
}
