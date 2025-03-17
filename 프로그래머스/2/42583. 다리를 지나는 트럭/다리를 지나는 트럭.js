function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let queue = new Array(bridge_length).fill(0); // 다리 상태
    
    
    while(truck_weights.length || queue.some(v => v >0)) {
        time++;
        queue.shift();
        
        let sum = queue.reduce((acc, cur) => acc + cur, 0);
        if(truck_weights.length > 0 && sum + truck_weights[0] <= weight) {
            queue.push(truck_weights.shift());
        } else {
            queue.push(0);
        }
    }
    
    
    return time;
}