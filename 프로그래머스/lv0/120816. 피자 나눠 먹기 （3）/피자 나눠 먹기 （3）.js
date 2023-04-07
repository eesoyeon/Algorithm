function solution(slice, n) {
    //피자 2~10조각, 최소 한 조각 
    var num = parseInt(n/slice);
    var answer = n%slice===0 ? num : num+1;

    return answer;
}