function solution(n, m) {
    var answer = [];
    
    let a = Math.max(n, m);
    let b = Math.min(n, m);

    
    while(b!=0){
        let r = a % b
        a = b;
        b = r;
    }
    
    answer.push(a, parseInt((n*m)/a))
    
    return answer;
}