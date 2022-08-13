function solution(inputArray) {
var min = 2;
    var test = false;
    var max = inputArray.reduce(function(a, b) {
        return Math.max(a, b);
    });
    while (min <= max + 1 && !test) {
        test = true;
        for (var i = 0; i < inputArray.length && test; i++) {
            if(inputArray[i] % min == 0) {
                test = false;
            }
        }
        min++;
    }
    min--;
    return min;
}
