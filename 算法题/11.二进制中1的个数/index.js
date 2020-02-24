function NumberOf1(n)
{
    // write code here
    let count = 0
    while (n!= 0) {
        count++
       n = n&(n-1)
    }
    return count
}