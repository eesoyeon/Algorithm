function solution(array) {
    // var answer = 0;
    
    array.sort((a, b) => a - b )
       
    return array[parseInt(array.length/2)];
}