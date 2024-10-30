function solution(skill, skill_trees) {
    let answer = 0;
    
    for(let skill_tree of skill_trees){
        let skillOrder = skill.split('');
        
        let isValid = true;
        for(let s of skill_tree){
            if(skillOrder.includes(s)){
                if(s !== skillOrder[0]){
                    isValid = false;
                    break;
                } else{
                    skillOrder.shift();
                }
            }
        }
        if(isValid) answer++;
    }
  
    return answer;
}