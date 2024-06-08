function solution(s) {
    var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    
    numbers.forEach((num, i)=>{
        while(s.includes(num)) s = s.replace(num, i);
    });
 
    return +s;
}