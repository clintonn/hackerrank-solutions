function processData(input) {
  var str = input.split("")
  strReducer(str)
}

function strReducer(a) {
  while (isReducible(a)) {
    for (i = 0; i < a.length - 1; i++) {
      if (a[i] === a[i + 1]) {
        a = a.slice(0, i).concat(a.slice(i + 2))
      }
    }
  }
  a.length === 0 ? console.log("Empty String") : console.log(a.join(""))
}

function isReducible(a) {
  for (i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      return true
    }
  }
  return false
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

