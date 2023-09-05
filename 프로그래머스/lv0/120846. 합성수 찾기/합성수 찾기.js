function solution(n) {
    //1~n에서 합성수 개수
    let cnt = 0; //약수개수
    let answer = 0;
    
    for(let i=1; i<=n; i++){
        for(j=1; j<=i; j++){
            if(i%j===0)
                cnt +=1; 
        }
        if(cnt>2){
            answer +=1;
        }
        cnt = 0;
    }
    
    return answer;
    
}