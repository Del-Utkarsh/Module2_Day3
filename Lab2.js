
function welMes() {
    var userName = prompt('Enter your username : ')
    var conf = confirm(`Are you sure ${userName} is correct?`)
    if (conf) {
        alert(`Welcome ${userName}.`)
    } else {
        alert(`Why on earth did you type ${userName} then?`)
    }
}
welMes()

var num1 = parseInt(prompt('Enter a number'))
var num2 = parseInt(prompt('Enter another number'))
var res = num1 + num2
alert(`The sum of the two nums : ${res}`)
