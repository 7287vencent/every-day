function IsPopOrder(pushV, popV)
{
    // write code here
    let stack = []
    let idx = 0
    for (let i = 0; i <= pushV.length - 1; i++) {
        stack.push(pushV[i])
        while (stack.length && stack[stack.length - 1] === popV[idx]) {
            stack.pop()
            idx++
        }
    }
    return stack.length === 0
}