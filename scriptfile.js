
setInterval(function () {
    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes()

    document.getElementById('clock').innerHTML = time;
}, 1000);


// function getTime(){
//     var today = new Date();
//     var time = today.getHours() + ':' + today.getMinutes()

//     document.getElementById('clock').innerHTML = time;
// }


function display(value) {

    document.getElementById('result').value += value

    return value
}

function clearScreen() {
    document.getElementById('result').value = ''
}


function solve() {
    let x = document.getElementById('result').value

    let y = eval(x)

    document.getElementById('result').value = y

}

