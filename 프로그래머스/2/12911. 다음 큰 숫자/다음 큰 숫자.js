function solution(n) {
    let count_n = n.toString(2).split('1').length
    
    while(true){
        n++
        if(n.toString(2).split('1').length == count_n) return n;
    }
    
}