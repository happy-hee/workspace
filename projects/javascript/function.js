// Function
function printHello() {
    console.log('hello!');
}
printHello();

function log(message) {
    console.log(message);
}

log('hello@');

function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters
function printAll(...args) { //배열 형태로 전달
    for (let i=0; i< args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'dahee');

// 5. Local scope -> 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; //global Variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a,b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(2, 3)}`);


// 7. Early return, early exit
// 조건이 맞지 않는 경우 빨리 return을 하고 필요한 로직들을 그 뒤에 작성하는 것이 더 좋다.

// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}


// 1. Function expression 
const print  = function () { // anonymous function (함수의 이름이 없는 것)
    console.log('print');
};
print();

const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,4));

// 2. Callback function
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('yes!');
};

const printNo = function print() {
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// 3. Arrow function 
// 항상 anonymous function 

// normal function
const simplePrint = function() {
    console.log('simple');
};

// Arrow function
const simplePrint2 = () => console.log('simple');
const add = (a, b) => a + b;

// 4. IIFE 함수를 바로 실행하고 싶을 경우 사용 (함수의 처음과 마지막에 ( 와 )를 작성)
(function hello() {
    console.log('IIFE');
})();


// Quiz!!
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder

function calculate(command, a, b) {
    if (command === 'add') {
        return a + b;
    } else if (command === 'subtract') {
        return a - b;
    } else if (command === 'multiply') {
        return a * b;
    }
}

// const result2 = calculate('subtract', 1, 2);
// console.log(result2);

// ! 해답
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        default:
            throw Error ('command를 알 수 없습니다.')
    }
}
console.log(calculate('add', 5, 8));