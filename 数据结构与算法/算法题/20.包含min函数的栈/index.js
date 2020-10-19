let stack  = []
function push(node)
{
    // write code here
    stack.push(node);
}
function pop()
{
    // write code here
    return stack.length == 0 ? null : stack.pop();
}
function top()
{
    // write code here
    return stack.length == 0 ? null : stack[0];
}
function min()
{
    // write code here
    return Math.min.apply(this,stack);
}