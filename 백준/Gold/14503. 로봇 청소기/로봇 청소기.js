const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ").map(Number);
const map = input.slice(2).map((line) => line.split(" ").map(Number));

//  북, 동, 남, 서
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let cleanedCount = 0;

while (true) {
  if (map[r][c] === 0) {
    map[r][c] = -1;
    cleanedCount++;
  }

  let moved = false;

  for (let i = 0; i < 4; i++) {
    d = (d + 3) % 4;
    const ny = r + dy[d];
    const nx = c + dx[d];

    if (map[ny][nx] === 0) {
      r = ny;
      c = nx;
      moved = true;
      break;
    }
  }

  if (!moved) {
    const backDir = (d + 2) % 4;
    const ny = r + dy[backDir];
    const nx = c + dx[backDir];

    if (map[ny][nx] === 1) {
      break;
    }
    r = ny;
    c = nx;
  }
}

console.log(cleanedCount);
