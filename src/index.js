
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
  if (!matrix) return [];  
  
  let nMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
      
    if (i % 2) { 
    	for (let j = matrix.length ; j >= 0; j--) {
    	nMatrix.push(matrix[i][j]);
      }
    }
   	else {
        for (let j = 0; j < matrix[i].length; j++) {
    	nMatrix.push(matrix[i][j]);
      }
  	}
  }
  return nMatrix;
}
