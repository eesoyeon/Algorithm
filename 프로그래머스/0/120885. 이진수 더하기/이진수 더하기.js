function solution(bin1, bin2) {
    var answer = '';
    
    one = bin1.split('').map(e => Number(e)).reverse()
    two = bin2.split('').map(e => Number(e)).reverse()
    
    let num = 0
    for(let i=0;i<one.length;i++){
        num += one[i]*(2**i)
    }
     for(let i=0;i<two.length;i++){
        num += two[i]*(2**i)
    }
    
    while(num>0){
        answer += (num%2).toString()
        num = parseInt(num / 2)
    }
    
    answer = answer.split('').reverse().join('')
    
    return answer===""? "0" : answer;
}