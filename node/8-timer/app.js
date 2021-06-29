let num = 1;

// setInterval: 일정한 간격 별로 특정한 일을 수행
const interval = setInterval(() => { 
    console.log(num++);
}, 1000); // 1초 마다(1000 = 1초)
// -> 1초마다 1이 증가된 숫자가 출력

// setTimeout: 일정 시간 후 함수 실행
setTimeout(() => {
    console.log('Timeout!');
    clearInterval(interval); // 실행되고 있는 interval 을 중지
},6000); //6초 뒤에 interval을 멈춤


// 터미널 중지 단축키-> Ctrl+C