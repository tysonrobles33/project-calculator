let numButtons = document.querySelectorAll('.numButton');
let display = document.querySelector('.current');
let displayHistory = document.querySelector('.history');
let opButtons = document.querySelectorAll('.opButton');
let equals = document.getElementById('equal')

let displayContent = '';


let firstOp = '';
let nextOp = '';
let operator = '';
let solution = '';
let clickCount = 0;
let opClickCount = 0;

function add (firstOp, nextOp) {
    return (parseInt(firstOp) + parseInt(nextOp));
}

function subtract(firstOp, nextOp) {
    return (parseInt(firstOp) - parseInt(nextOp));
}

function multiply(firstOp, nextOp) {
    return (parseInt(firstOp) * parseInt(nextOp));
}

function divide(firstOp, nextOp) {
    return (parseInt(firstOp) / parseInt(nextOp));
}


function evaluate (firstOp, operator, nextOp) {
    if (operator == '+') {return add(firstOp, nextOp)};
    if (operator == '-') {return subtract(firstOp, nextOp)};
    if (operator == 'x') {return multiply(firstOp, nextOp)};
    if (operator == '/') {return divide(firstOp, nextOp)};
}

let getDisplay = numButtons.forEach(numButton => {
    numButton.addEventListener('click', function eventHandler() {
        displayContent += numButton.id;
        display.textContent = displayContent;
    })
})

function test() {
    opButtons.forEach(opButton => {
        opButton.addEventListener('click', () => {
            opClickCount++
            if (opClickCount >= 2){
                nextOp = displayContent;
                firstOp = evaluate(firstOp, operator, nextOp);
                operator = getOperator(opButton.id);
                displayHistory.textContent = (firstOp + operator);
                displayContent = '';
                display.textContent = '';
            }
            if (clickCount >= 1) {
                firstOp = solution
                operator = getOperator(opButton.id);
                displayHistory.textContent = firstOp + operator;
                displayContent = '';
                display.textContent = '';
            } 
            if(opClickCount < 2 && clickCount == 0) {
                firstOp = displayContent;
                operator = getOperator(opButton.id);
                displayHistory.textContent = firstOp + operator;
                displayContent = '';
                display.textContent = '';
            }
        })
    })
    equals.addEventListener('click', () => {
        clickCount++;
        nextOp = displayContent;
        displayHistory.textContent = (firstOp + operator + nextOp);
        solution = evaluate(firstOp, operator, nextOp);
        display.textContent = solution;
        firstOp = '';
        operator = '';
        nextOp = '';
    })   
}

function getOperator (opButton) {
    if (opButton == 'add') {return '+' }
    if (opButton == 'subtract') {return '-' }
    if (opButton == 'multiply') {return 'x'}
    if (opButton == 'divide') {return '/' }
}

test()