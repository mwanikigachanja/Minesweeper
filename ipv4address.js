function solution(inputString) {
let strMain = inputString.split(".");

if(strMain.length !== 4){
    return false;
}
let val;
for(let i=0; i<4; i++){
    if(strMain[i].length=0){
        return false;
        console.log("here");
    }
    val = Number(strMain[i]);
    
    if(val.toString(10).length != strMain[i].length){
        return false;
    }
    if(isNaN(val) || val>255 || val<0){
        return false
    }
}
return true;
}
