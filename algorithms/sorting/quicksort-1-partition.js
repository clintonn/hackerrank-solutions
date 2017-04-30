function processData(input) {
  let left = [];
  let right = [];
  let ar = input.split("\n")[1].split(" ").map(el => Number.parseInt(el));
  let p = Number.parseInt(ar[0]);
  ar.shift();
  for (i = 0; i < ar.length; i++) {
    ar[i] >= p ? left.push(ar[i]) : right.push(ar[i]);
  }
  console.log(left.join(" ") + " " + p + " " + right.join(" "));
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

