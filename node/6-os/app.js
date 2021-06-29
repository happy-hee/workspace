// node가 동작하는 운영체제의 정보를 가져오는 os 모듈
const os = require('os');

console.log(os.EOL === '\n');
console.log(os.EOL === '\r\n');