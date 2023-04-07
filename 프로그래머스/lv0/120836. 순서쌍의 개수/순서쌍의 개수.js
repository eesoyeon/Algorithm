function solution(n) {
    //20 = 1 2 4 5 10 20 약수 개수
    var answer = 0;

    for (let i=1; i<=n; i++){
        if (n%i==0)
            answer += 1
    }
    return answer;
}