function solution(n, t) {
    //t시간에 세균 수는 2의 t승 * n
    var answer = 0;
    
    return n*Math.pow(2, t);
}