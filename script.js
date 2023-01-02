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
display.textContent = '0';
panel.forEach(option => {
    option.addEventListener ('click', (e) => {
        console.log(e.target);

        if(e.target.classList.contains('number')) getNumber(e);
        if(e.target.classList.contains('operator')) getOperator(e);
        if(e.target.classList.contains('equal')) {
            if (!nums[0] || nums[1] === '' || digit === '') return; // Validate inputs
            
            nums[1] = digit;

            if(operator === '÷' && nums[1] === '0') {
                /* window.open('./') */
                alert('You can not divide by zero!')
                clear();
            } else {
            result = operate(operator, +nums[0], +nums[1])
            /* result = getResult(operator, nums); */
            nums[0] = result;
            digit = '';
            display.textContent = `${+result.toFixed(6)}`;
            putPoint();
            }
        }
        if(e.target.classList.contains('clear')) clear();
        if(e.target.classList.contains('point')) getNumber(e);
        if(e.target.classList.contains('erase')) erase();

    })
});

function getNumber(e) {
    if(nums.length == 2 && result) clear();
    digit += e.target.textContent;
    display.textContent = digit;
    putPoint();
}

function getOperator(e) {
    if(digit === '' && result) {
        operator = e.target.textContent;
        display.textContent = `${+result.toFixed(6)} ${operator}`;
        if(nums.length == 2) nums.pop();
        return
    };
    if(digit === '') return; // Validate input
    if(nums[0]) {
        nums[1] = digit;

        if(operator === '÷' && nums[1] === '0') {
            alert('You can not divide by zero!')
            clear();
            return
        } else {
        result = operate(operator, +nums[0], +nums[1]);
        /* result = getResult(operator, nums); */
        nums[0] = result;
        operator = e.target.textContent;
        display.textContent = `${+result.toFixed(6)} ${operator}`;
        digit = '';
        nums.pop();
        document.querySelector('.point').classList.remove('disabled');
        return
        }
    }
    nums[0] = digit;
    operator = e.target.textContent;
    digit = '';
    display.textContent = `${nums[0]} ${operator}`;
}

function clear() {
    operator = '';
    digit = '';
    nums = [];
    result = '';
    display.textContent = '0';
}

function erase() {
    if(nums.length == 2 && result) {
        /* result = display.textContent.slice(0,-1);
        nums[0] = result;
        digit = '';
        display.textContent = result;
        nums.pop(); */
        clear();
    }
    if(!display.textContent.match(/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)\s(\+|\-|÷|×)$/)) {
        digit = display.textContent.slice(0,-1);
        display.textContent = digit;
        putPoint();
    }
}

function putPoint() {
    (digit.match(/^[-+]?[0-9]*[.][0-9]*$/)) 
    ? document.querySelector('.point').classList.add('disabled')
    : document.querySelector('.point').classList.remove('disabled');
}
/* function getResult(operator, nums) {
    nums[1] = digit;
    result = operate(operator, +nums[0], +nums[1]);
    return operate(operator, +nums[0], +nums[1]) 
} */


//Change operator
//Points sequence