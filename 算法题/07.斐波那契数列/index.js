function Fibonacci(n)
{
    // write code here
    if (n <= 1) return n
    let f0 = 0
    let f1 = 1
    let f2 = 0
    for (let i = 2; i <= n; i++) {
        f2 = f0 + f1
        f0 = f1
        f1 = f2
    }
   return f2
}

// 优秀班

function Fibonacci(n)
{
    // write code here
    // 动态规划
    let f = 0, g = 1
    while (n--) {
      g += f
      f = g - f
    }
    return f
}