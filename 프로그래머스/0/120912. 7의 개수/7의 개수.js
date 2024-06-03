function solution(array) {
    var answer = 0;
    for(let num of array){
        let n = num.toString()
        for(let i of n){
            if(i==='7') answer++;
        }
    }

    return answer;
}