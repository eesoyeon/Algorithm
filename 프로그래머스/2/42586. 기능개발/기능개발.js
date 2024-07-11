function solution(progresses, speeds) {
    var answer = [];
        
    let release = [];
    let cnt = 1;
    
    for(let i=0; i<progresses.length; i++){
        let x = 0;
        while(progresses[i] + speeds[i] * x < 100){
            x += 1
        }
        release.push(x); 
    }
    
    let cmp = release[0];
    
    for(let i=1; i<release.length; i++){
        if(cmp >= release[i]) cnt++;
        else{
            answer.push(cnt);
            cmp = release[i];
            cnt = 1;
        }
    }
    answer.push(cnt);
    
    return answer;
}