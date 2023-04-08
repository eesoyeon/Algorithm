function solution(numbers, direction) {
    //right 0 1 2 -> 2 0 1
    //left 0 1 2 -> 1 2 0
    // var answer = [];
    // var leng = numbers.length;
    // for (let i=0; i<leng-1; i++){
    //     if(direction === 'right'){
    //         answer[i+1] = numbers[i];
    //         answer[0] = numbers[leng-1];
    //     }
    //     else {
    //         answer[i] = numbers[i+1];
    //         answer[leng-1] = numbers[0];
    //     }
    // }
    var answer = [];
    
    if (direction == 'right'){
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }
    
    answer = numbers;
    
    return answer;
}