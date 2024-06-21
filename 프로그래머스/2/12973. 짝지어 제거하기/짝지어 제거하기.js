function solution(s)
{
    var answer = 0;
    
    let stack = [];
    
    for(let char of s){
        if(stack[stack.length-1]===char){
            stack.pop();
            continue;
        }
        stack.push(char);
    }
    
    if(stack.length===0) return 1;
    
    return answer;
}