
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
let nMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
  	for (let j = 0; j <matrix[i].length; j++) {
    	nMatrix.push(matrix[i][j]);}
  }
  return nMatrix;
}
