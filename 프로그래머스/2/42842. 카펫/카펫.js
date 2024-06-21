function solution(brown, yellow) {
    let answer = [];
    

    let area = brown + yellow;
    
    for(let height=3; height<parseInt(area/2); height++){
        if((height-2) * (parseInt(area/height) - 2) === yellow){
            answer.push(parseInt(area/height));
            answer.push(height);
            break;
        }
    }
    
    return answer
}