function solution(image) {
let [h,w] = [image.length-1,image[0].length-1];
    let [answer,sum,tmp] = [[],0,[]]
    for(let row = 1; row < h; row += 1){
        tmp = []
        for(let clmn = 1; clmn < w; clmn += 1){
            sum = 0;
            [-1,0,1].forEach(deltar =>{
                [-1,0,1].forEach(deltac =>{
                    sum += image[row+deltar][clmn+deltac]
                });
            });
            tmp.push(parseInt(sum/9));
        }
        answer.push(tmp);
    }
    return answer;
}
