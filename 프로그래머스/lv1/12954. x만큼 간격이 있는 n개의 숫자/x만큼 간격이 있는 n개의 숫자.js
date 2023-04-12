function solution(x, n) {
    //x*(1,2,3,..n)
    var answer = [];
    for(let i=1; i<=n; i++){
        answer.push(x*i);
    }
    
    return answer;
}