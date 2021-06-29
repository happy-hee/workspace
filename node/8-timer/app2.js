console.log('code1');
// setTimeout: 일정 시간 후 함수 실행
setTimeout(() => {
    console.log('setTimeout 0!');
}, 0); 

// setImmediate: 현재 poll phase?가 끝났을 때 실행
console.log('code2');
setImmediate(() => {
    console.log('setImmediate!');
})

// nextTick: 모든 과정이 끝난 뒤에 제일 처음으로 실행됨
console.log('code3');
process.nextTick(() => {
    console.log('nextTick!');
})

// concole 결과
// code1
// code2
// code3
// nextTick!
// setTimeout 0!
// setImmediate!