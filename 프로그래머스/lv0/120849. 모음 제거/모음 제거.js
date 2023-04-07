function solution(my_string) {
    // var answer = '';
    const str = 'aeiou';
    let answer = my_string.split('').filter(elem => (!str.includes(elem))).join('');
   
    return answer;
}