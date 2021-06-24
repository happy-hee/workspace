// 5 - module (export, import)
// Javascript의 모듈 (2015 최신 모듈)

// 모듈 가져오기(import)

// 1. 지정된 모듈 가져오기
// import { increase, getCount } from './counter.js'
// increase();
// increase();
// increase();
// console.log(getCount());

/**
 * 2. ./counter.js 안에 있는 모듈을 전부 가져오기
 * 1) ./counter.js 안에 있는 모듈을 전부(*)
 * 2) counter라는 이름으로(as counter)
 * 3) ./counter.js 에서 가져오고 싶다 (from './counter.js')
 */

import * as counter from './counter.js'



counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
