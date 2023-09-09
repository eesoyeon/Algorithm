function solution(emergency) {
    //큰 숫자한테 작은 수부터 할당
    //내림차순으로 정렬한 배열의 (인덱스 값+1)이 진료순서가 됨
    
    let arr = emergency.slice().sort((a,b)=>b-a);
   
    
    return emergency.map(v=>arr.indexOf(v)+1);
}