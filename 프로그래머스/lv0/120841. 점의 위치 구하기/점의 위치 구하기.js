function solution(dot) {
    const [x, y] = dot;
    const num = x * y > 0;
    
    
    return x>0 ? (num?1:4) : (num?3:2);
}