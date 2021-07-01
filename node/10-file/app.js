// 10-file. 파일명 변경하기

const fs = require('fs');

// 모든 API는 세가지 형태로 제공이 되어짐
// 1. rename
// 1-2. rename(...., callback(error, data)) // 비동기
// 2. try { renameSync(....) } catch(e) { } // 동기 사용하지 않는게 좋음, try catch문으로 감싸주어야 함
// 3. promises.rename().then().catch(0) // 비동기

// 동기
try {
    fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
    console.error(error);
}

// 비동기
fs.rename('./text-new.txt', './text.txt', (error) => { 
    console.log(error); // null(에러가 없으므로)
});

// 비동기
fs.promises
    .rename('./text2.txt', './text-new.txt')
    .then(() => console.log('Done')) // rename이 되고난 이후는(then) -> console에 Done 이라는 메세지를 띄움
    .catch(console.error); // 에러가 발생한 경우(catch)