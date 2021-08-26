//JSON
//JavaScript Object Notation

//1. Object 를 JSON 으로 변환
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple", "banana"];

const rabbit = {
    name: 'tory',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json); // ["name":"tory","color":"white" ~ "birthDate" : 2021-08~" *jump 함수는 포함되지 않음]

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); //{"name": "tory", "color": "white" }

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // key 가 name 이라는 배열로 들어오면 dahee 라는 value 사용, 아니라면 원래 value 사용
    return key === 'name' ? 'dahee' : value; //"name" : "dahee"
});
console.log(json);

//2. JSON 을 Object 로 변환
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj); //rabbit의 key, value들을 가져옴
rabbit.jump(); //can jump! (위에서 선언했던 const rabbit의 함수이기때문에 동작)
// obj.jump(); //error (json으로 넘길때 함수는 직렬화되지 않았기때문에 json을 object에는 jump라는 기능이 없음)

console.log(rabbit.birthDate.getDate()); //29
console.log(obj.birthDate.getDate()); //error (json 에서 가져올땐 birthDate가 string 이었기 때문에)

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`); //모든 key와 value 출력
    //key 가 birthDate 면 Date라는 object를 만들고, 아니라면 본래의 value 사용
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(rabbit.birthDate.getDate()); //29
console.log(obj.birthDate.getDate()); //29

//유용한 사이트
// JSON Diff checker: http://www.jsondiff.com/
// JSON Beautifier/editor: https://jsonbeautifier.org/
// JSON Parser: https://jsonparser.org/
// JSON Validator: https://tools.learningcontainer.com/json-validator/
