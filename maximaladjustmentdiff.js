function solution(inputArray) {
let pLargeDiff = 0;
let largeDiff = 0;

for (let i=0; i < inputArray.length; i++){
    if(Math.abs(inputArray[i+1] - inputArray[i]) > largeDiff){
        largeDiff = Math.abs(inputArray[i+1] - inputArray[i]);
    }
    else{
        largeDiff = largeDiff;
    }
}
return largeDiff;
}
