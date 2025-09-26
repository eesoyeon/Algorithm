/**  최소 힙 구현
 * 부모 노드 ≤ 자식 노드
 * 루트(root)는 항상 가장 작은 값
 * 완전 이진 트리 구조를 배열로 표현 가능
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.size() > 0) {
      this.heap[0] = end;
      this._heapifyDown();
    }

    return min;
  }

  size() {
    return this.heap.length;
  }

  // 위로 올리기
  // 새로운 값을 힙에 넣을 때
  // 최소 힙 조건을 만족하도록 루트 방향으로 이동
  // 새 값 → 부모와 비교 → 부모보다 작으면 위로 이동 → 반복
  _heapifyUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);

      if (element >= this.heap[parentIdx]) break;
      [this.heap[idx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[idx],
      ];
      idx = parentIdx;
    }
  }

  // 아래로 내리기
  // 루트 값을 제거하거나, 루트에 새 값을 넣을 때
  // 최소 힙 조건을 만족하도록 자식 방향으로 이동
  // 루트 제거 → 마지막 값 루트로 이동 → 작은 자식과 비교 → 루트보다 크면 아래로 이동 → 반복
  _heapifyDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length && this.heap[leftIdx] < element) {
        swap = leftIdx;
      }
      if (
        rightIdx < length &&
        this.heap[rightIdx] < (swap === null ? element : this.heap[leftIdx])
      ) {
        swap = rightIdx;
      }

      if (swap === null) break;
      [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
      idx = swap;
    }
  }
}

/** 그리디 + 최소 힙
 * 목표: 총 비교 힛수 최소화
 * 핵심전략: 항상 가장 작은 두 묶음을 합친다 -> 최소 힙 사용
 * 큰 묶음을 먼저 합피면 비교 횟수가 더 커짐 -> 그리디 선택
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);

const heap = new MinHeap();

for (let i = 1; i <= N; i++) {
  heap.push(Number(input[i]));
}

let total = 0;

while (heap.size() > 1) {
  const first = heap.pop();
  const second = heap.pop();
  const sum = first + second;
  total += sum;
  heap.push(sum);
}

console.log(total);
