process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function isCommonMultiple(arr, el) {
  var isMultiple = true
  arr.forEach(n => {
    if (el % n != 0) {
      isMultiple = false
      return isMultiple
    }
  })
  return isMultiple
}

function isCommonFactor(arr, el) {
  var isCommonFactor = true
  arr.forEach(n => {
    if (n % el != 0) {
      isCommonFactor = false
      return isCommonFactor
    }
  })
  return isCommonFactor
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);

  const maxA = Math.max.apply(this, a)
  const minA = Math.min.apply(this, a)
  const minB = Math.min.apply(this, b)
  const gcms = []
  for (i = maxA; i <= minB; i += minA) {
    if (isCommonMultiple(a, i) && isCommonFactor(b, i)) {
      gcms.push(i)
    }
  }
  console.log(gcms.length)
}
.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);

}
