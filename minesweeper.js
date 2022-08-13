function solution(matrix) {
var sum=0;
  var mines=[],line=[];
  for (var y=0;y<matrix.length;y++){
    line=[];
    for (var x=0;x<matrix[0].length;x++){
      sum=0;
      if(y-1>=0){
        if(matrix[y-1][x])
          sum++;
      }
      if(x-1>=0&&y-1>=0){
        if(matrix[y-1][x-1])
          sum++;
      }
      if(x-1>=0){
        if(matrix[y][x-1])
            sum++;
      }
      if(x+1<matrix[0].length&&y-1>=0){
          if(matrix[y-1][x+1])
              sum++;
      }
      if(y+1<matrix.length&&x-1>=0){
            if(matrix[y+1][x-1])
              sum++;
      }
      if(x+1<matrix[0].length){
          if(matrix[y][x+1])
            sum++;
      }
      if(y+1<matrix.length){
          if(matrix[y+1][x])
            sum++
      }
      if(x+1<matrix[0].length&&y+1<matrix.length){
         if(matrix[y+1][x+1])
              sum++;
      }
      line.push(sum);
    }
    mines.push(line);
  }
  return mines;
}
