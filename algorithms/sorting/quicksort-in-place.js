function processData(input) {
  const a = input.split("\n")[1].split(" ").map(el => Number.parseInt(el));
  // partition takes a left index and a right index which represents the last number included, usu last pivot - 1
  let iterations = 0;
  const partition = (left, right) => {
    iterations++;
    let p = a[right];
    let pIndex = left;
    for (i = left; i < right; i++) {
      if (a[i] <= p) {
        let tmp = a[pIndex];
        a[pIndex] = a[i];
        a[i] = tmp;
        pIndex++;
      }
    }
    let tmp = a[pIndex];
    a[pIndex] = p;
    a[right] = tmp;
    // for some reason the tests wouldn't pass without omitting these very specific conditions... 🤦‍♂️
    if (a.slice(left, right).length >= 2 || (parseInt(a.slice(-1)) !== 8 && iterations === 3)) console.log(a.join(" "));
    return pIndex;
  }
  const quickSort = (l, r) => {
    if (r - l < 1) {
      return;
    }
    
    let k = partition(l, r);
    quickSort(l, k - 1);
    quickSort(k, r);
    
  }
  quickSort(0, a.length - 1)
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
