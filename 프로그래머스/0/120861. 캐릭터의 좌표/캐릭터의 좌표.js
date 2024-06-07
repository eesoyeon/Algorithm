function solution(keyinput, board) {
    var answer = [0, 0];
    
    let a = parseInt(board[0]/2);
    let b = parseInt(board[1]/2);
    let c = -parseInt(board[0]/2);
    let d = -parseInt(board[1]/2);

    for(let key of keyinput){
        if(key==='up' && answer[1] < b){
            answer[1]++;
        } else if(key==='down' && answer[1] > d){
            answer[1]--;
        } else if(key==='left' && answer[0] > c) {
            answer[0]--;
        } else if(key==='right' && answer[0] < a) {
            answer[0]++;
        }
    }
  
    return answer;
}