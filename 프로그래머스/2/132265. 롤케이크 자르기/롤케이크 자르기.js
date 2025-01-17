function solution(topping) {
    let answer = 0;
    
    const right = new Map();
    const left = new Map();
    
    for (const t of topping) {
        if(right.get(t)) {
            right.set(t, right.get(t) + 1);
        } else {
            right.set(t, 1);
        }
    }
    
    for(const t of topping) {
        if(right.get(t) > 1) {
            right.set(t, right.get(t) - 1);
        }
        else {
            right.delete(t)
        }
        
        if(left.get(t)) {
            left.set(t, left.get(t) + 1);
        } else {
            left.set(t, 1);
        }
        
        if(left.size===right.size) {
            answer ++;
        }
    }
    
    
    
    return answer;
}