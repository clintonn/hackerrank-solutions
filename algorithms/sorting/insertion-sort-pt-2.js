function processData(input) {
  const len = input.split("\n")[0]
  const a = input.split("\n")[1].split(" ").map(n => Number.parseInt(n))
  for (i = 1; i < len; i++) {
    for (j = i; j > 0; j--) {
      while (a[j - 1] > a[j]) {
        let swap = a[j - 1]
        a[j - 1] = a[j]
        a[j] = swap
      }
    }
    console.log(a.join(" "))
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

