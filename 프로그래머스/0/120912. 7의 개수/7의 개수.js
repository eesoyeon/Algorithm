function solution(array) {
    var answer = 0
    var arr = array.join().split("")
    
    for(elem of arr){
        if(elem==='7') answer++;
    }
    
    return answer
}