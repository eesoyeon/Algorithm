function solution(arr, divisor) {
    //나눠지는 값 오름차순으로 정렬
//     var answer = [];
//     arr.map(i => {
//         if(i%divisor === 0)
//             answer.push(i);
//     })
    
//     answer.sort((a,b) => a-b);
    
//     return answer.length>0? answer: [-1];
    
    var answer = arr.filter(e => (e%divisor == 0));
    return answer.length == 0? [-1] : answer.sort((a,b)=>a-b);
}