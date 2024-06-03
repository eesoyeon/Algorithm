function solution(s1, s2) {
    var answer = s1.filter(elem => s2.includes(elem))
   
    
    return answer.length;
}