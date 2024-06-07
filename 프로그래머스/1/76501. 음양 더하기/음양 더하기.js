function solution(absolutes, signs) {
    var answer = 0;
    
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}