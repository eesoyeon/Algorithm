function solution(s) {
    const tuples = (str) => s.slice(2, -2).split('},{').map(v => toNumbers(v)).sort(sortArr).reduce((acc, cur) => [...acc, ...cur.filter((v) => !acc.includes(v))], []);
    
    const toNumbers = (str) => str.split(',').map(v => Number(v));
    
    const sortArr = (a, b) => a.length - b.length;
    
    return tuples(s);
}