function solution(s, n) {
    var answer = '';
    
    for(let char of s){
        let c = char.charCodeAt();
               
        if(c >= 65 && c<= 90){
            c += n;
            if(c>90) c -= 26;
        } 
        else if(c >= 97 && c <= 122){
            c += n;
            if(c>122) c-= 26;
        }
        answer += String.fromCharCode(c);
    }
    
    return answer;
}