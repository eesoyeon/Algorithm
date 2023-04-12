function solution(arr) {
    // var answer = 0;
    var sum = arr.reduce((prev,cur) => prev + cur);
    
    return sum/(arr.length);
}