function solution(s) {
    const arr = s.split("");
    let frequency = new Array(26).fill(0);
    
    for(let char of s) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0)
        frequency[index]++;
    }
    
    let uniqueChars = [];
    for(let i=0; i<26; i++){
        if (frequency[i] === 1) {
            uniqueChars.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
        }
    }
    
    uniqueChars.sort()
    
    return uniqueChars.join('');
}