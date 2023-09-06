function solution(my_string) {
    //정규표현식으로 숫자 고르기
    const nums = my_string.match(/[0-9]+/g);
    
   
    return nums ? nums.map(num=>Number(num)).reduce((a,c) => a+c, 0): 0;
    
    console.log(nums);
    // return arr.filter(e=>e!==null);
}