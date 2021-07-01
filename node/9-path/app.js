const path = require('path');

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'
// 운영체제에 따라서 디렉토리 및 운영체제가 달라짐

console.log(__dirname); // 디렉토리 이름
console.log(__filename); // 파일이름

console.log(path.sep); // 경로 구분자 
console.log(path.delimiter); // 환경 변수 구분자

// basename
console.log(path.basename(__filename)); // 특정한 경로를 전달하고 파일 정보만 읽어옴
console.log(path.basename(__filename, '.js')); // 파일 이름만 출력

// dirname: 디렉토리 이름
console.log(path.dirname(__filename));

// extname: 확장자 표시
console.log(path.extname(__filename));

//parse: Object 형태로 전체 경로를 분리하여 표시
const parsed = path.parse(__filename);
console.log(parsed);

// format: string 형태로 변환
const str = path.format(parsed);
console.log(str);

// isAbsolute: 절대경로인지 확인
console.log('isAbsolute?', path.isAbsolute(__dirname)); //true
console.log('isAbsolute?', path.isAbsolute('../')); //false

// normalize: 
console.log(path.normalize('./folder//////sub'));

// join: 경로 만들기(운영체제에 따라 다르게 만들어짐)
console.log(path.join(__dirname, 'image')); // workspace/workspace/node/9-path/image
