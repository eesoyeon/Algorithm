function solution(str1, str2) {
    let answer = 0;
    
    // 다중집합
    let arr1 = multiSet(str1);
    let arr2 = multiSet(str2);
    
    const intersectionSize = calculateIntersection(arr1, arr2);
    const unionSize = arr1.length + arr2.length - intersectionSize;
    
    answer = unionSize === 0 ? 65536 : parseInt((intersectionSize / unionSize) * 65536);
    
    return answer;
}

function multiSet(str){
    const arr = [];
    const reg = /^[A-Za-z]+$/;
    
    str = str.toLowerCase();
    for(let i=0; i<str.length-1; i++){
        const substr = str.slice(i, i+2);
        if(reg.test(substr)){
            arr.push(substr);
        }
    }
    return arr;
}

function calculateIntersection(arr1, arr2) {
    const countMap = new Map();
    let cnt = 0;
    
    arr1.forEach(e => countMap.set(e, (countMap.get(e) || 0) + 1));
    
    arr2.forEach(e => {
        if(countMap.has(e) && countMap.get(e) > 0){
            cnt += 1;
            countMap.set(e, countMap.get(e) -1);
        }
    })
    
    return cnt;
}


