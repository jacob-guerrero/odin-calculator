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
        case '×':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        default:
            return;
    }
}

let operator = '';
let digit = '';
let nums = [];
let result = '';
const panel = document.querySelectorAll('#panel')
const display = document.querySelector('#display p');
panel.forEach(option => {
    option.addEventListener ('click', (e) => {
        console.log(e.target);

        if(e.target.classList.contains('number')) getNumber(e);
        if(e.target.classList.contains('operator')) getOperator(e);
        if(e.target.classList.contains('equal')) {
            if (!nums[0] || nums[1] === '' || digit === '') return;
            nums[1] = digit;
            /* if(!+nums[1]) return; */
            result = operate(operator, +nums[0], +nums[1])
            /* result = getResult(operator, nums); */
            display.textContent = `${result}`;
        }

        /* display.textContent = ` ${operator}`; */

    })
});

function getNumber(e) {
    digit += e.target.textContent;
    display.textContent = digit;
}

function getOperator(e) {
    if(digit === '') return;
    if(nums[0]) {
        nums[1] = digit;
        result = operate(operator, +nums[0], +nums[1]);
        /* result = getResult(operator, nums); */
        nums[0] = result;
        operator = e.target.textContent;
        digit = '';
        display.textContent = `${result} ${operator}`;
        nums.pop();
        return
    }
    nums[0] = digit;
    operator = e.target.textContent;
    digit = '';
    display.textContent = `${nums[0]} ${operator}`;
}

/* function getResult(operator, nums) {
    if (nums[1] === '') return;
    nums[1] = digit;
    if(!+nums[1]) return;
    return operate(operator, +nums[0], +nums[1]) 
} */