// 2 - console.log의 진실

// log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert
// 첫번째 인자로 전달한 값이 true가 아닐 때만 log로 출력
console.assert(2 === 3, 'not same!'); 
console.assert(2 === 2, 'same!');

// print object
const student = { name: 'dahee', age: 30, company: {name : 'beanpage'} };
console.log(student); 
console.table(student); // 테이블 형태로 출력
console.dir(student, { showHidden: true, colors: true, depth: 0 });

// measuring time
// 특정한 코드가 수행될 때 얼마나 걸렸는지 측정
console.time('for loop');
for (let i=0; i<10; i++) {
    i++;
}
console.timeEnd('for loop');

// counting
// 변수가 몇번 호출되었는지 카운팅
function a() {
    console.count('a function');
}
a();
console.countReset('a function');
a();

// trace
// 누가 이 함수를 호출했는지 알고싶을 때 사용
// 파일과 몇번째 줄에서 이 함수가 호출되었는지 확인할 수 있다.
function f1() {
    f2();
}
function f2(){
    f3();
}
function f3(){
    console.log('f3');
    console.trace();
}
f1();
