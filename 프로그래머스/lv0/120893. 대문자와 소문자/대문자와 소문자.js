function solution(my_string) {
    var answer = '';
    for(let x of my_string){
        if(x === x.toUpperCase())
            answer += x.toLowerCase();
        else
            answer += x.toUpperCase();
    }
    return answer;
}