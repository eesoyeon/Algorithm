function solution(numbers) {
    var number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
           
    number.forEach((str, idx) =>{
        numbers = numbers.replaceAll(str, idx)
    })
    
    return Number(numbers);
}