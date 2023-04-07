function solution(n) {
    var answer = [];
    //n이하 홀수 오름차순으로, 10 -> 0 1 2 3 4 5 6
    for (let i=1; i<=n; i+=2){
        answer.push(i);
    }

    return answer;
}