function solution(hp) {
    //장군개미 5, 병정개미 3, 일개미 1
    //최소한의 병력 5*x + 3*y + z = hp, x+y+z=?
    //23/5=4, 23%5=3, 3/3=1, 3%3=0, 0/1 = 0
    var answer = 0;
    var x = Math.floor(hp / 5);
    var y = Math.floor((hp % 5) / 3);
    var z = Math.floor((hp % 5) % 3);
    
    return x+y+z;
}