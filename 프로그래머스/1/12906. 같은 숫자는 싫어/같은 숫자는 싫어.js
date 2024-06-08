function solution(arr)
{
    var stack = [];
    for(let a of arr) {
        if(stack.length===0 || a!=stack[stack.length-1]) stack.push(a);
    }
    
    return stack;
}