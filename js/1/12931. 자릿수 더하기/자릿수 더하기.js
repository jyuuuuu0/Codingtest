function solution(n)
{
    let answer = 0;
    let sum = String(n);
    for(let i=0;i<sum.length;i++){
        answer += parseInt(sum[i]);
    }
    return answer;
}