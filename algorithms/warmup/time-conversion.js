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
    var time = readLine();
    const hours = Number.parseInt(time.slice(0, 2))
    const meridian = time.slice(-2)
    if (hours === 12) {
      meridian === "AM" ? console.log("00" + time.slice(2, -2)) : console.log(time.slice(0, -2))
    } else {
      meridian === "PM" ? console.log(`${hours + 12}${time.slice(2, -2)}`) : console.log(time.slice(0, -2))
    }
}

