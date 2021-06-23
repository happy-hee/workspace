/**
 * class와 object
 * https://www.youtube.com/watch?v=_DLhUBWsRtw&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=6
 */

'use strict';
// class : 템플릿
// objct : 템플릿을 사용해 만든것

// 1. Class 선언
class person { 
    // constructor(생성자)
    constructor(name, age) {
        // fields
        this.name = name;
        this. age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

// person class를 사용해 Object 생성
const dahee = new person('dahee', 30);
console.log(dahee.name);
console.log(dahee.age);
dahee.speak();


// 2. Getter and Setters
class user {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('마이너스가 될 수 없습니다.');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new user('steve', 'job', -5);
console.log(user1.age);


// 3. Fields (public, private)


// 4. Static
// 들어오는 데이터에 상관 없이 공통적으로  class에서 사용할 수 있는 것이라면 static을 사용하면 좋다.
class Article {
    static publisher = 'Dream coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher); // undefined
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance(상속)
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() { //메소드
        console.log(`drawing ${this.color} color of`)
    }

    getArea() { //메소드
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} // extends를 사용해 Shape 에 있는 모든 것들이 Rectangle 에 들어감
class Triangle extends Shape {
    draw() {
        super.draw(); // super : 부모
        console.log('📕');
    }
    getArea() { //메소드
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 30, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const tringle = new Triangle(20, 20, 'yellow');
tringle.draw();
console.log(tringle.getArea());


// 6. instanceOf (Class checking)
console.log(rectangle instanceof Rectangle);
console.log(tringle instanceof Rectangle);
console.log(tringle instanceof Triangle);
console.log(tringle instanceof Shape);
console.log(tringle instanceof Object);