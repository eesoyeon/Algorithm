function solution(jobs) {
    // 소요시간 짧 > 요청시간 짧 > 작업 번호 작
    
    let waitQueue = []; // 요청 작업
    let i = 0; // jobs 인덱스
    let totalTime = 0; // 반환 시간
    let time = 0; // 현재 시간
    let count = 0; // 처리된 작업 수
    const size = jobs.length;
    
    jobs.sort((a, b) => a[0] - b[0]); // 요청 시점 기준 정렬
    
    while(count < size) {
        while(i < size && jobs[i][0] <= time) {
            waitQueue.push(jobs[i]);
            i++;
        }
        
        
        if(waitQueue.length > 0) {
            waitQueue.sort((a, b) => a[1] - b[1]);
            const [start, work] = waitQueue.shift();
            
            time += work;
            totalTime += (time - start);
            count++;
        } else {
            time = jobs[i][0];
        }
    }

  

    return Math.floor(totalTime / size);
}