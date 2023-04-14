function solution(x) {
    var answer = true;
    var sum = x.toString().split('').map(e=>Number(e)).reduce((a,b)=>a+b);
    
    return !(x%sum);
}