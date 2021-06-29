/**
 * Array (배열)
 * https://youtu.be/yOdAVDuHUKQ
 */

'use strict';

// 1. 배열 선언 방법
const arr1 = new Array();
const arr2 = [1, 2]; // 더 흔하게 쓰임

// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나
console.log(fruits[3]); // Undefined
// 배열의 제일 마지막에 있는 아이템을 찾을 경우
console.log(fruits[fruits.length - 1]); // 바나나

console.clear();

// 3. Looping over an array
// 모든 과일 출력하기
// a. for
for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}
console.clear();

// c. forEach
fruits.forEach((fruit) => console.log(fruit));


// 4. Add, Del, Copy
// push: add an item to end (뒤에서부터 데이터를 추가)
fruits.push('복숭아', '딸기');
console.log(fruits);

// pop: remove an item from the end (뒤에서부터 데이터를 삭제)
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging (앞에서부터 데이터를 추가)
fruits.unshift('딸기','레몬');
console.log(fruits);

// shift: remove an item from the benigging  (앞에서부터 데이터를 삭제)
fruits.shift();
fruits.shift();
console.log(fruits);
console.clear();

// ✏️ note!! shift, unshift are slower than pop, push
//   (shift, unshift는 pop, push보다 느리므로 가능하면 pop, push를 사용)

// splice: remove an item by index position (배열 잘라내기)
fruits.push('딸기','복숭아','레몬');
console.log(fruits); // "사과", "바나나", "딸기", "복숭아", "레몬"
fruits.splice(1, 1, '수박'); 
console.log(fruits); // 사과, 수박, 복숭아, 레몬 (1번째 인덱스의 바나나를 삭제하고 배, 수박을 추가함)

// concat: combine two arrays (배열 합치기)
const fruits2 = ['배', '코코넛'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); //"사과","수박", "딸기", "복숭아", "레몬", "배", "코코넛"

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits); // "사과", "수박", "딸기", "복숭아", "레몬"
console.log(fruits.indexOf('레몬')); //4 (레몬의 index)
console.log(fruits.indexOf('귤')); //-1 (배열 안에 해당 데이터가 있는지 확인 후 없으면 -1로 출력)

// includes
console.log(fruits.includes('수박')); //true (배열 안에 해당 데이터가 있는지 확인 후 true/false로 출력)
console.log(fruits.includes('귤')); //false (배열 안에 해당 데이터가 있는지 확인 후 true/false로 출력)

// laseIndexOf
console.clear();
console.log(fruits);
fruits.push('사과');
console.log(fruits);

console.log(fruits.indexOf('사과')); // 0 (똑같은 데이터가 두 개 있을 때, 앞에서부터 index를 셈)
console.log(fruits.lastIndexOf('사과')); // 5 (똑같은 데이터가 두 개 있을 때, 뒤에서부터 index를 셈)