

document.getElementById("7").addEventListener("click", displayDate);

function display(value){

    document.getElementById('result').value += value

    return value
}

function clearScreen(){
    document.getElementById('result').value = ''
}

// function clearScreen(){

//     document.getElementById('result').value = ''

// }

function solve(){
    let x =  document.getElementById('result').value 

    let y = eval(x)

    document.getElementById('result').value = y

}