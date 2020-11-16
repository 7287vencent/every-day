var hammingWeight = function(n) {
    let count= 0
    while(n != 0){
      n = n & (n-1)
      count++ 
    }
    return count
    
    // console.log(count)
    // n = '' + n
    // return [...n].filter(item => item > 0).length

};
n = 11111111111111111111111111111101
console.log(hammingWeight(n))