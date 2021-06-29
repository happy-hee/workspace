// node가 현재 동작하고있는 프로세스의 정보를 가져오는 process 모듈
const process = require('process');

console.log(process.execPath);
console.log(process.version);

//
setTimeout(()=> {
    console.log('setTimeout');
}, 0);

//
process.nextTick(()=> {
    console.log('nextTick');
});

for (let i=0; i<100; i++) {
    console.log('for loop');
};