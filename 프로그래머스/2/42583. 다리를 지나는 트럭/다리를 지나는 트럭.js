function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let queue = new Array(bridge_length).fill(0); // 다리 상태
    let currentWeight = 0;
    
    while(truck_weights.length > 0) {
        time++;
        currentWeight -= queue.shift();
        
        if(currentWeight + truck_weights[0] <= weight) {
            let newTruck = truck_weights.shift();
            queue.push(newTruck);
            currentWeight += newTruck;
        } else {
            queue.push(0);
        }
    }
    
    while(currentWeight > 0) {
        time++;
        currentWeight -= queue.shift();
        queue.push(0);
    }
    
    return time;
}