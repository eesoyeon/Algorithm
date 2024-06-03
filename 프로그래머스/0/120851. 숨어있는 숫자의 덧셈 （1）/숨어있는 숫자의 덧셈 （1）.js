function solution(my_string) {
    var answer = 0
    var arr = [...my_string]
    
    for(elem of arr){
        if(parseInt(elem)){
            answer += parseInt(elem)
        }
    }
    
    return answer
}