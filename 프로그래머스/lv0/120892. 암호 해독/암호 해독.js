function solution(cipher, code) {
    //code*1, 2, 3,... 문자열만 뽑아서
//     var answer = [];
    
//     var array = [...cipher];
//     for(let i=0; i<=array.length; i++){
//         if(i%code === 0)
//             answer.push(array[i-1]);
            
//     }
//     return answer.join("");
    var answer ="";
    for(let i=code-1;i<cipher.length; i+=code){
        answer += cipher[i];
    }
    return answer;
}