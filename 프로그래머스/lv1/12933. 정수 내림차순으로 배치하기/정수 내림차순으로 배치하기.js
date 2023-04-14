function solution(n) {
    var answer = 0;
    var arr = n.toString().split('').map(e=>Number(e));
    return arr.sort((a,b) => b-a).join('')/1;
}