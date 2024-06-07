function solution(s) {
    var answer = '';
    let l = s.length
    
    if(l%2!=0) answer = s[parseInt(l/2)]
    else answer = s[(l/2)-1] + s[l/2]
    
    return answer;
}