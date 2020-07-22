var ary = [0,1,2];
ary[10] = 10;
ary.filter(function(x) { return x === undefined;});
