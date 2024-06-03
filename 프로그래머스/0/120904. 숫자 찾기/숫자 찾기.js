function solution(num, k) {
    var answer = 0;
    var arr = String(num).split("")
    
    answer = arr.indexOf(String(k))
    
    return answer===-1?-1:answer+1
}