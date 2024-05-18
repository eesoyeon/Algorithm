function solution(s){
    //p,y 개수 동일하면 true 
    var answer = true;
    var arr = s.toLowerCase().split('');

    
    var p = arr.filter(e => e==='p').length;
    var y = arr.filter(e => e==='y').length;
   
    return p===y ? answer: !answer;
}