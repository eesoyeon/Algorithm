function solution(n) {
    var answer = 0;
    
    let a = n.toString(3).split("").reverse().join("");
    
    return parseInt(a, 3);
}