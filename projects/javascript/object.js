/**
 * Object
 * https://youtu.be/1Lbr29tzAA8
 * 
 * object는 key와 value의 집합체
 * object = {key: value};
 */

// object를 만드는 법 
const obj1 = {} // object 리터럴
const obj2 = new Object(); // object constructor

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const dahee = {name: 'dahee', age: 4};
print(dahee);

dahee.hasJob = true;
console.log(dahee.hasJob);

delete dahee.hasJob;
console.log(dahee.hasJob);


// 2. Computed properties
// key는 string 타입으로 지정해서 가져와야 한다.
console.log(dahee.name);
console.log(dahee['name']);
dahee['hasJob'] = true;
console.log(dahee.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(dahee, 'name');


// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
// 위와같은 것들이 반복된다면 좀 더 쉽게 만드는 방법이 없을까?
const person4 = new Person('dahee', 30);
console.log(person4)

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator
// 키가 있는지 없는지 확인 (in)
console.log('name' in dahee);
console.log(dahee.random)

//6. for..in vs for..of
// for (key in obj)
// 모든 키들을 받아와서 일들을 처리하고 싶을 경우 사용
console.clear();
for (key in dahee) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i< array.length; i++) {
    console.log(array[i]);
}
console.clear();

for (value of array) {
    console.log(value);
}

// 7. Cloning
const user = {name: 'dahee', abe: '20'};
const user2 = user;
user2.name = 'coder'; //name을 'coder'로 변경
console.log(user); // name2와 name이 가리키고 있던게 동일했으므로 동시에 변경됨

// old
const user3 = {};
for (key in user) { 
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
// !! red가 아니라 blue가 나온 이유?
// 뒤에 나오는 아이일수록 앞에 동일한 property가 있다면 값이 계속 덮어씌워짐
console.log(mixed.size); // big