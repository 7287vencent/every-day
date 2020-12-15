var maxSubArray = function (nums) {
  let p = 0, max = -Infinity
  nums.forEach(x => {
    p = Math.max(p + x, x)
    console.log(p)
    max = Math.max(max, p)
  })
  return max
};

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// console.log(maxSubArray(nums))


// todo 方法二：分治算法
function Status (l, r, m, i) {
  this.lSum = l;
  this.rSum = r;
  this.mSum = m;
  this.iSum = i;
}

const pushUp = (l, r) => {
  const iSum = l.iSum + r.iSum;
  const lSum = Math.max(l.lSum, l.iSum + r.lSum);
  const rSum = Math.max(r.rSum, r.iSum + l.rSum);
  const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
  return new Status(lSum, rSum, mSum, iSum);
}

const getInfo = (a, l, r) => {
  if (l === r) {
    return new Status(a[l], a[l], a[l], a[l]);
  }
  const m = (l + r) >> 1;
  const lSub = getInfo(a, l, m);
  const rSub = getInfo(a, m + 1, r);
  return pushUp(lSub, rSub);
}

var maxSubArray = function (nums) {
  return getInfo(nums, 0, nums.length - 1).mSum;
};