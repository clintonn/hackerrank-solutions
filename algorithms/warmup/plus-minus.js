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

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    const len = arr.length
    const positives = arr.filter(el => el > 0).length
    const negatives = arr.filter(el => el < 0).length
    console.log((positives / len).toFixed(6))
    console.log((negatives / len).toFixed(6))
    console.log(((len - positives - negatives) / len).toFixed(6))
}

