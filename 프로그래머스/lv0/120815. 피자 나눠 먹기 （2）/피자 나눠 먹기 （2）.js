function solution(n) {
    //피자 6조각
    //6의 배수로 나눠지는 수 찾아야
    
//     var answer = 0;
    
//     for(let i=1; i<=100; i++){
//         if(6*i % n === 0){
//             answer = i;
//             break;
//         }
//     }

    let piece = 6;
    while(true){
        if(piece%n===0)
            break;
        else
            piece += 6;
        
    }
    
    return piece / 6;
}