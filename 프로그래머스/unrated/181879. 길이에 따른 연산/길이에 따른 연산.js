function solution(num_list) {
    
    while(num_list.length > 10){
        return num_list.reduce((a,c)=> a+c);
    }
    
    return num_list.reduce((a,c)=>a*c);
}