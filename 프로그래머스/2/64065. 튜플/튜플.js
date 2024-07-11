function solution(s) {
    let arr = s.substring(1, s.length-2).split('},').map(arr => arr.substring(1).split(',').map(v => Number(v)));
    
    arr.sort((a,b)=>a.length-b.length);
    
    const answer = arr.reduce((acc, cur) => {
        const value = cur.find(v  => !acc.includes(v));
        acc.push(value);
        return acc;
    }, [])
    
    return answer;
}