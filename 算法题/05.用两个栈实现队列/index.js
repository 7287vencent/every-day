let outStack = []
let intoStack = []
function push(node)
{
    intoStack.push(node)
    // write code here
}
function pop()
{
    // write code here
    if (!outStack.length) {
        while(intoStack.length) {
            outStack.push(intoStack.pop())
        }
    }
    return outStack.pop()
}