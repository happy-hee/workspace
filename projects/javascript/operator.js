// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);


// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 /1 ); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation 2의 3승


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// -> counter = counter + 1;
// -> preIncrement = counter;

const postIncrement = counter++; // 먼저 이 변수의 값을 postIncrement에 할당한 후, counter에 1을 증가함
// postIncrement = coutner;
// counter = counter + 1;


//4. Assignment operators
let x = 3;
let y = 6;
console.log(x += y); // x = x + y;
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// or은 처음에 true가 나오면 이후를 호출하지 않음
// 그러므로 시간이 오래 걸리는 함수 등을 제일 나중에 적는게 효율적임
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
// and는 처음에 false가 나오면 이후를 호출하지 않음
// and 역시 동일하게 무거운 함수 등을 제일 나중에 적는게 효율적임
console.log(`and: ${value1 && value2 && check()}`);

// (쓸모없는 시간이 걸리는 함수)
function check() {
    for (let i = 0; i < 10; i++) {
      //wasting time
      console.log('😱');
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);



// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); //true 
console.log(null === undefined); //false


// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no'); //no


// 10. Switch statement
// use for multiple if checks 여러가지를 체크할 때에 사용
// for enum-like value check
// use for multiple type checks in TS
const browser = 'Chrome';
switch (browser) { // browser 안에 있는 값이
    case 'IE': // IE면
        console.log('go away!'); // IE가 아니기 때문에 지나감
        break; 
    case 'Chrome':  // Chrome이 맞으므로
    case 'Firefox': // 똑같은 메세지를 출력하고 싶을 경우
        console.log('love you');
        break; // break 실행
    default:
        console.log('same all!');
        break;
}


// 11. Loops
let i = 3;

// Loops - while
while (i>0) { // false로 나오기 전까지 무한대로 반복
    console.log(`while: ${i}`);
    i--;
}

// Loops - do
do { // 먼저 block을 실행한 후 while을 실행함
    console.log(`do while: ${i}`); // while은 일단 0임 (위의 while문에서 0이 되어있음)
} while (i > 0); // i가 0보다 큰가? 아니므로 실행되지 않음

// Loops - for (begin; condition; step)
// begin은 한번만 발생하고, 이후로는 condition과 step이 반복됨
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}


// Quize (break, continue)
// Q1. 숫자를 0부터 10까지 나열하되, 짝수인 아이들만 print 하기 (use continue)
for (let i = 0; i<11; i++) {
    if (i%2 == 0) {
        console.log(i);
    }
}

// Q1. 해답 
for (let i=0; i<11; i++) { //0~10 까지 반복
    if (i%2 !==0) { // i를 2로 나누었을 때 나머지가 0이 아닌 경우(홀수)
        continue; // 나머지가 0이 아닌 경우 지나감(아래 console.log를 호출하지 않고 돌아감)
    }
    console.log(i); // 짝수인 경우 continue 되지 않고 console이 출력됨
}


// Q2. 숫자를 0부터 10까지를 loop하는 것을 작성하되, 숫자 8을 만나면 멈춤(use break)
for (let i = 0; i<11; i++) {
    console.log(i);
    if (i === 8) {
        break;
    }
}

// Q2. 해답 
for (let i = 0; i<11; i++) {
    if (i > 8) { // i가 8보다 커지면 멈춤
        break;
    }
    console.log(i);
}