function solution(my_string) {
    //문자열에서 숫자 찾고 숫자의 합
    var answer = 0;
    var regex = /[^0-9]/g;
    var num = my_string.replace(regex, "")
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);
   
    // var array = [...num].map(i => Number(i)).reduce((a,b) => (a+b));

    
    return num;
}