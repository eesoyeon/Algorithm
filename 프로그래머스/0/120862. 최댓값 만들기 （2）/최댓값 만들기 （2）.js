function solution(numbers) {
    var answer = 0
    numbers.sort((a, b) => a - b)
        
    var x = numbers[0]*numbers[1]
    var y = numbers[numbers.length-1]*numbers[numbers.length-2]
    
    return x > y ? x : y;
}