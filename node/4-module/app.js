// 4 - module (export, require)
// Node.js의 모듈

// 모듈 가져오기(require)
const counter = require('./counter.js');

counter.increase();
console.log(counter.getCount());