function processData(input) {
  const qs = (arr) => {
    if (arr.length <= 1) return arr;
    let p = arr[0];
    arr.shift();
    let left = [];
    let right = [];
    for (i = 0; i < arr.length; i++) {
      arr[i] <= p ? left.push(arr[i]) : right.push(arr[i]);
    }
    if (left.length) {
      left = qs(left);
    }
    if (right.length) {
      right = qs(right);
    }
    console.log(left.concat(p).concat(right).join(" "));
    return left.concat(p).concat(right)
  }
  
  const len = Number.parseInt(input.split("\n")[0]);
  const a = input.split("\n")[1].split(" ").map(el => Number.parseInt(el));
  qs(a);
}
