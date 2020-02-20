while (line = readline()) {
  let arr = JSON.parse(line);
  print(minNumberInRotateArray(arr));
}
function minNumberInRotateArray (rotateArray) {
  // write code here
  // if (!rotateArray.length) return 0;
  // let pointlow = 0;
  // let pointhigh = rotateArray.length - 1;
  // while (pointlow < pointhigh) {
  //     let mid = parseInt(pointlow + (pointhigh - pointlow) / 2);
  //         if(rotateArray[mid] > rotateArray[pointhigh]){
  //             pointlow = mid + 1;
  //         }else if(rotateArray[mid] === rotateArray[pointhigh]){
  //             pointhigh = pointhigh - 1;
  //         }else{
  //             pointhigh = mid;
  //         }  
  // }
  // return rotateArray[pointlow];

  if (!rotateArray.length) return 0
  let low = 0
  let high = rotateArray.length - 1
  while (low < high) {
    let mid = parseInt(low + (high - low) / 2)
    // console.log(mid)
    if (rotateArray[mid] > rotateArray[high]) {
      low = mid + 1
    } else if (rotateArray[mid] === rotateArray[high]) {
      high--
    } else {
      high = mid
    }
  }
  return rotateArray[low]
  // return Math.min(...rotateArray)
}