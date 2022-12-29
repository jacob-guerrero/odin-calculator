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

const numbers = document.querySelectorAll('#panel')
numbers.forEach(number => {
    number.addEventListener ('click', (e) => {
        console.log(e.target);
        const display = document.querySelector('#display p');
        display.textContent = e.target.textContent;
    })
});