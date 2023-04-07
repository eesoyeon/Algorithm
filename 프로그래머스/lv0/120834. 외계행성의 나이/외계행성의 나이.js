function solution(age) {
    //a(0), b(1), c(2), d(3), e(4)
    var answer = '';
    
    let ch = {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
        5: "f",
        6: "g",
        7: "h",
        8: "i",
        9: "j",
    };
    
    let newAge = age + "";
    
    return newAge.split("").map(v => ch[v]).join("");
}