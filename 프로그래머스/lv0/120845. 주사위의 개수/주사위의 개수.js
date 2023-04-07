function solution(box, n) {
    //먼저 가로 세로
//     var answer = 1;
    
//     for(elem of box){
//         answer *= Math.floor(elem/n);
//     }
    
//     return answer;
    
    return box.reduce((acc, v) => acc * Math.floor(v/n), 1);
}