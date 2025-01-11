function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1);
    let stack = []; // 인덱스 저장
    
    for(let i=0; i<numbers.length; i++) {
        for(let j=stack.length -1; j>=0; j--){
            if(numbers[stack[j]] < numbers[i]) {
                answer[stack[j]] = numbers[i];
                stack.pop();
            } else {
                break;
            }
        }
        stack.push(i);
    }
    
    return answer;
}