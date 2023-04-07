function solution(sides) {
    // var answer = 0;
    //삼각형 1, 없 2
    sides.sort((a,b)=> {return a-b});
    
    var answer = (sides[0] + sides[1]) > sides[2] ? 1:2
    
    return answer;
}