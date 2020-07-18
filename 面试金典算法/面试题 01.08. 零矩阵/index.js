/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // 两个循环
    let M = matrix.length
    let N = matrix[0].length
    let arr = []
    // let row = [] // 行
    // let col = [] // 列
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (matrix[i][j] === 0) {
                arr.push([i,j])
                // row.push(i)
                // col.push(j)
            }
        }
    }
    // console.log(row, col)
    // 行
    // for (let i = 0; i < row.length; i++) {
    //     for (let j = 0; j < N; j++) {
    //         matrix[row[i]][j] = 0
    //     }
    // }
    // for (let i = 0; i < col.length; i++) {
    //     for (let j = 0; j < M; j++) {
    //         matrix[j][col[i]] = 0
    //     }
    // }

    for (let item of arr) {
        for(let i = 0; i < M; i++) {
            matrix[i][item[1]] = 0
        }
        for(let i = 0; i < N;i++) {
            matrix[item[0]][i] = 0
        }
    }
};