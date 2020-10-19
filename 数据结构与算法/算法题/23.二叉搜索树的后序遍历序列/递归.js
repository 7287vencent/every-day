function VerifySquenceOfBST (sequence) {
  if (!sequence.length) {
    return false;
  }
  return adjustSquence(sequence, 0, sequence.length - 1);

}

function adjustSquence (sequence, start, end) {
  if (start >= end) {
    return true;
  }
  var i = start;
  while (i < end && sequence[i] < sequence[end]) {
    i++;
  }
  for (var j = i; j < end; j++) {
    if (sequence[j] < sequence[end]) {
      return false;
    }
  }
  return adjustSquence(sequence, start, i - 1) && adjustSquence(sequence, i, end - 1)

}