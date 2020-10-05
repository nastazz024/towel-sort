
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let newM = []
  if (matrix && matrix[0]) {

    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        for (let a = 0; a < matrix[i].length; a++) {
          newM.push(matrix[i][a])
        }

      } else {
        matrix[i] = matrix[i].reverse()
        for (let c = 0; c < matrix[i].length; c++) {

          newM.push(matrix[i][c])
        }
      }

      
    }
    return newM

  }
  else {
    return newM
  }
}
