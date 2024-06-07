function solution(dots) {    
    dots.sort((a,b) => a[0]-b[0]);
    var h = dots[1][1]-dots[0][1]
    var w = dots[2][0]-dots[0][0]

    console.log(h, w)
    return h*w;
}