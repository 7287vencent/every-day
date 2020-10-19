function Power(x, n)
{
    // write code here
    if(n < 0) {
        if(x <= 0) {
            throw new Error("分母不能小于等于0");
        }else {
            if(-n % 2 == 1) {
                return 1/(Power(x,-n-1) * x);
            }else {
                var r = 1/Power(x,-n/2);
            return r * r;
            }
        }
    }
    if(n == 0) {
        return 1;
    }
    else {
        if(n % 2 == 1) {
            return Power(x,n-1) * x;
        }else {
            var r = Power(x,n/2);
            return r * r;
        }
    }
}