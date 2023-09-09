function solution(array, n) {
    //n과 가까운 수, 차이가 가장 작은 수
    //(arr값-n)의 절댓값 구해서 최소값 찾고 인덱스 값으로 배열특정값 찾기
    //for...of, for...in 헷갈림
    let absArr=[];
    
    for(x of array.sort((a,b) => (a-b))){
        absArr.push(Math.abs(x-n));
    }
    
    let min = Math.min(...absArr);
    
    return array[absArr.indexOf(min)];
    // console.log(min);
}