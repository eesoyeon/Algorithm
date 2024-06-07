function solution(numbers) {
    var answer = 45;
    let a = numbers.reduce((a,b)=>a+b, 0)
    return answer - a;
}