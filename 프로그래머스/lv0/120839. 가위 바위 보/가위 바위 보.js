function solution(rsp) {
    //가위2(0), 바위0(5), 보5(2)
//     var answer = [];
//     var arr = [...rsp];
    
//     for (elem of arr) {
//         if(elem === "2")
//             answer.push("0");
//         else if (elem === "0")
//             answer.push("5");
//         else
//             answer.push("2");
//     }
    
//     return answer.join("");
    
    let arr = {
        2: 0,
        0: 5,
        5: 2,
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    
    return answer;
}