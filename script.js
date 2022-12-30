function add(a, b) {
    return a + b
}
function subtract (a, b) {
    return a - b
}
function multiply (a, b) {
    return a * b
}
function divide (a, b) {
    return a / b
}

function operate (operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return;
    }
}

let operator;
let digit = '';
const panel = document.querySelectorAll('#panel')
const display = document.querySelector('#display p');
panel.forEach(option => {
    option.addEventListener ('click', (e) => {
        console.log(e.target);

        if(e.target.classList.contains('number')) getNumber(e);
        if(e.target.classList.contains('operator')) getOperator(e);

    })
});

function getNumber(e) {
    digit += e.target.textContent;
    display.textContent = digit;
}

function getOperator(e) {
    operator = e.target.textContent;
    console.log(operator)
}