function solution(sizes) {
    const width = [];
    const height = [];
    
    for(let size of sizes) {
        const max = Math.max(size[0], size[1]);
        const min = Math.min(size[0], size[1]);
        width.push(max);
        height.push(min);
    }
   
    
    return Math.max(...width) * Math.max(...height)
    
}