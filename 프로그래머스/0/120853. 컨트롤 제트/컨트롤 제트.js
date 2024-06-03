function solution(s) {
    var answer = 0;
    var arr = s.split(" ")
    
    for(elem of arr){
        if(parseInt(elem)) answer += parseInt(elem)
    }
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]==='Z'){
            answer -= parseInt(arr[i-1])
        }
    }
    
    return answer
}