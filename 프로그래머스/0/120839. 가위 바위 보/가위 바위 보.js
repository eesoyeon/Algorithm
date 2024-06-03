function solution(rsp) {
    var answer = ""
    var arr = [...rsp]
    
    for(let a of arr){
        if(a==='2') answer += '0';
        if(a==='0') answer += '5';
        if(a==='5') answer += '2';
     }
    return answer
}