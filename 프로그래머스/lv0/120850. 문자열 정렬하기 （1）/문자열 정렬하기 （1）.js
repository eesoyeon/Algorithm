function solution(my_string) {
    //숫자 오름차순으로
    var answer = [];
    
    var regex = /[^0-9]/g; //숫자가 아닌 문자열
    var result = my_string.replace(regex, "");
    
    answer = [...result].sort((a, b) => a-b).map(Number);
    
    return answer;
}