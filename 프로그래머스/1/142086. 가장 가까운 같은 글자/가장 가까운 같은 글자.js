function solution(s) {
    var answer = [];
    
    let last = {};
    for(i=0; i<s.length; i++){
        let char = s[i];
        
        if(last[char] === undefined) answer.push(-1);
        else answer.push(i-last[char]);
        
        last[char] = i;
    }
    
    return answer;
}