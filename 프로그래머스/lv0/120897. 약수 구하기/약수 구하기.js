function solution(n) {
    var answer = [];
    //n%i===0 -> i
    for(let i=1; i<=n; i++){
        if(n%i === 0)
            answer.push(i);
    }
    
    
    return answer;
}