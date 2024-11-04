function solution(s) {
    let answer = 0;
    const pairs = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    }
    
    if(s.length % 2 !== 0) return 0;
    
    for(let i=0; i<s.length; i++){
        const rotated = s.slice(i) + s.slice(0, i);
        const stack = [];
        let isValid = true;
        
        for(let char of rotated) {
            if(char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else if(stack.pop() !== pairs[char]) {
                isValid = false;
                break;
            }
        }
        if(isValid && stack.length === 0) answer++;
    }
    
    return answer;
}