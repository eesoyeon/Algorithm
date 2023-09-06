function solution(i, j, k) {
    //1~13 1이 몇번, 1,11,12,13 1의개수=6
    //반복문으로 하나의 문자열로
    //문자열을 배열로 바꾸고 숫자로 바꾼다 
    //k 찾기 위해 filter 함수 사용
    let str = "";
    
    for(i; i<=j; i++){
        str += i;
    }
    
    let arr = [...str].map(Number);
    let kNum = arr.filter(v => v===k);
    
    console.log(kNum);
    
    return kNum.length;
}