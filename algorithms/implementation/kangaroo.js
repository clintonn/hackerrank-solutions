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

function catchesUp(faster, slower) {
  faster.pos += faster.v
  slower.pos += slower.v
  if (faster.pos > slower.pos) {
    console.log("NO")
  } else if (faster.pos === slower.pos) {
    console.log("YES")
  } else {
    catchesUp(faster, slower)
  }
}

function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
  
   const rooA = {
     pos: x1,
     v: v1
   }
   const rooB = {
     pos: x2,
     v: v2
   }
   
   const faster = rooA.v > rooB.v ? rooA : rooB
   const slower = faster == rooA ? rooB : rooA
   
   if (rooA.v == rooB.v && rooA.pos != rooB.pos) {
     console.log("NO")
   } else if (faster.pos > slower.pos) {
     console.log("NO")
   } else {
     catchesUp(faster, slower)
   }
}

