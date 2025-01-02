function solution(n, left, right) {
    let answer = [];
    
    for(let i=left; i<=right; i++){
        const column = parseInt(i / n);
        const row = i % n;
        
        let num = column;
        if(row >= column) {
            num = row;
        }
        
        answer.push(num + 1);
    }
    
    
    return answer;
}