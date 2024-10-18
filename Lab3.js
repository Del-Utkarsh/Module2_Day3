
function addNum() {
    var num1 = parseInt(document.getElementById('num1').value)
    var num2 = parseInt(document.getElementById('num2').value)
    let output = `Addition is ${num1 + num2}`
    document.getElementById('result').innerHTML = output
}
function subNum() {
    var num1 = parseInt(document.getElementById('num1').value)
    var num2 = parseInt(document.getElementById('num2').value)
    let output = `Subtraction is ${num1 - num2}`
    document.getElementById('result').innerHTML = output
}
function mulNum() {
    var num1 = parseInt(document.getElementById('num1').value)
    var num2 = parseInt(document.getElementById('num2').value)
    let output = `Multiplication is ${num1 * num2}`
    document.getElementById('result').innerHTML = output
}
function divNum() {
    var num1 = parseInt(document.getElementById('num1').value)
    var num2 = parseInt(document.getElementById('num2').value)
    let output = `Division is ${num1 / num2}`
    document.getElementById('result').innerHTML = output
}