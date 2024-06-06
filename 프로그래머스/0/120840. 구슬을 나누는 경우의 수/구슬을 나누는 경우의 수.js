function solution(balls, share) {
    var answer = 0;
    
    if(share<parseInt(balls/2)){
        share = balls - share
    }
    
    let a = 1
    let b = 1
    
    for(let i=balls; i>share; i--){
        a *= i
    }
    console.log(a)
    for(let i=balls-share; i>0; i--){
        b *= i
    }
    
    answer = parseInt(a/b)
    return answer;
}