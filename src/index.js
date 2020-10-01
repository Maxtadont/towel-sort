
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0)
    return [];
  
  let arr = [];
  let newmatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    if ((i+2) % 2 === 0)
      arr = matrix[i].sort(function(a, b) {return a - b; });
    else
      arr = matrix[i].sort(function(a, b) {return b - a; });
    
      for (let j = 0; j < arr.length; j++) {
      newmatrix.push(arr[j]);
    }
  }
  return newmatrix;
}
