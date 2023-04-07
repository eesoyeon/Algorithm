function solution(n, numlist) {
    // var answer = [];
  
    return numlist.filter(elem => elem % n === 0);
}