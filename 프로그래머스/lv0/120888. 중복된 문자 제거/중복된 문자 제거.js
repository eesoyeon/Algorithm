function solution(my_string) {
    var arr = my_string.split('');
    
    return arr.reduce((prev, cur)=>prev.includes(cur)?prev:[...prev,cur], []).join("");
}