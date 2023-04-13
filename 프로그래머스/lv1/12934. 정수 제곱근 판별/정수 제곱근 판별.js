function solution(n) {
    var answer = 0;
    
    var sq = Math.sqrt(n)
 
    return  Number.isInteger(sq) ? Math.pow(sq+1, 2) : -1;
}