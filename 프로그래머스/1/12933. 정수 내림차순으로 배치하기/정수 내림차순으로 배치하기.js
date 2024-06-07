function solution(n) {
    var answer = 0;
    var arr = n.toString().split('').sort().reverse().join("");
    return +arr;
}