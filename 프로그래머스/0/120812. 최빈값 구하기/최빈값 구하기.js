function solution(array) {
    let maxVal = Math.max(...array)
    let frequency = new Array(maxVal+1).fill(0);
    
    for(let num of array){
        frequency[num]++;
    }

    let maxFrequency = 0;
    let mode = null;
    let isMultiple = false;
    
    for(let i=0; i<frequency.length; i++){
        if(frequency[i]>maxFrequency){
            maxFrequency = frequency[i]
            mode = i;
            isMultiple = false;
        } else if(frequency[i]===maxFrequency){
            isMultiple = true;
        }
    }
    
    return isMultiple ? -1 : mode;
  
}