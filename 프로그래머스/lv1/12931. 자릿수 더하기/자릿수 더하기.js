function solution(n)
{
    var answer = 0;
    var num = String(n).split('').map(a=>Number(a));
    
    return num.reduce((a,b)=>a+b);
}