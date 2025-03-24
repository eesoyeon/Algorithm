function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let queue = new Array(bridge_length).fill(0); // 다리 상태 나타내는 큐
    let currentWeight = 0; // 현재 다리 위 무게
    
    while(truck_weights.length > 0) {
        time++;
        
        // 다리에서 트럭 이동
        currentWeight -= queue.shift();
        
        // 새 트럭 올릴 수 있으면, 그 무게 빼서 queue에 올리기
        if(currentWeight + truck_weights[0] <= weight) {
            let newTruck = truck_weights.shift();
            queue.push(newTruck);
            currentWeight += newTruck;
        } else {
            queue.push(0);
        }
    }
    
  
    return time + bridge_length;
}