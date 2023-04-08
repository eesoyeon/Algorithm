function solution(before, after) {
    var answer = 0;
    
    return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}