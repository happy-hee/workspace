// 3 - this
function hello() {
    console.log(this);
    console.log(this === global);
}

hello();

class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('------ class -----');
        console.log(this);
        console.log(this === global);
    }
}

const a = new A(1);
a.memberFunction();

console.log('------ global scope -----');
console.log(this);
console.log(this === module.exports); // node에서의 this는 module의 exports를 가리킨다.

