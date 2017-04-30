function processData(input) {
  const target = input.split("\n")[0]
  const a = input.split("\n")[2].split(" ")
  
  a.forEach((el, index) => {
    if (el === target) console.log(index)
  })
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

