function solution(seoul) {
    var answer = '';
    seoul.forEach((v, i) => {
        if(v==='Kim')
            answer = i;
    }
                 )
    return "김서방은 " +answer+"에 있다";
}