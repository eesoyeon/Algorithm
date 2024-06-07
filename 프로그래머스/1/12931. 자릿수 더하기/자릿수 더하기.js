function solution(n)
{
    return n.toString().split("").map(e=>Number(e)).reduce((a,b) => a+b)
}