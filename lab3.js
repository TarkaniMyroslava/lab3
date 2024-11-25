const matrix1 = [
    [5,2,1,8],
    [2,1,4,3],
    [7,3,2,0],
    [1,8,1,4],
 ]
 
 const matrix2 = [
     [8,6,4,1],
     [1,9,0,2],
     [7,5,2,4],
     [1,2,3,4],
  ]
 
  console.table(matrix1)
  console.table(matrix2)
 
 
 const result = [
     [0, 0, 0, 0],
     [0, 0, 0, 0],
     [0, 0, 0, 0],
     [0, 0, 0, 0]
 ];
 
 
 for (let i = 0; i < 4; i++) {
     
     for (let j = 0; j < 4; j++) {
         
         let sum = 0; 
         
         for (let k = 0; k < 4; k++) {
         
             sum = sum + matrix1[i][k] * matrix2[k][j];
         }
         
         result[i][j] = sum;
     }
 }
 
 console.table(result);
 
 