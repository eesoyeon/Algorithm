function solution(numbers) {
    //정렬, 0*1 마지막*마지막-1 비교
    var answer = 0;
    
    numbers.sort((a,b)=> a-b);
    var x = numbers[0]*numbers[1];
    var y = numbers[numbers.length-1]*numbers[numbers.length-2];
    
    answer = x>y ? x : y; 
        
    return answer;
}