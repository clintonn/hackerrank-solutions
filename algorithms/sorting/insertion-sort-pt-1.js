function processData(input) {
  const len = input.split("\n")[0]
  const a = input.split("\n")[1].split(" ")
  const e = input.split("\n")[1].split(" ").slice(-1).join("")
  a[len - 1] = undefined
  for (i = 0; i < len; i++) {
    if (a[len - i - 2] > e) {
      a[len - i - 1] = a[len - i - 2]
      console.log(a.join(" "))
    } else {
      a[len - i - 1] = e
      console.log(a.join(" "))
      break
    }
  }
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

