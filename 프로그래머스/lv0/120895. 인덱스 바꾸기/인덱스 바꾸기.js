function solution(my_string, num1, num2) {
    // var answer = '';
    
    // [...my_string].replace(num1, num2);
    var arr = [...my_string];
    var ch1 = arr[num1];
    var ch2 = arr[num2];
    arr.splice(num1, 1, ch2);
    arr.splice(num2, 1, ch1)
    
    return arr.join("");
}