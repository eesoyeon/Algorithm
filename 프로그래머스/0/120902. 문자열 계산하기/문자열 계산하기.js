function solution(my_string) {
    var answer = 0;
    var arr = my_string.split(" ")
    
    answer += Number(arr[0])
    for(let i=1; i<arr.length; i++){
        
        if(arr[i]==='+'){
            answer += Number(arr[i+1])
        }
        else if(arr[i]==='-'){
            answer -= Number(arr[i+1])
        }
    }
    return parseInt(answer);
}