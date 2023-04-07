function solution(num, k) {
    var answer = 0;
    var arr = num.toString().split('');
    
    answer = arr.indexOf(k.toString())
    
    return answer != -1 ? answer+1 : -1 ;
}