function solution(spell, dic) {
    var answer = 2;
    
    
    for(let d of dic){
        for(let s of spell){
             d = d.replace(s, '0')
        }

        if(d === '0'.repeat(spell.length)){
            answer = 1
        }
    }
    
    return answer;
}