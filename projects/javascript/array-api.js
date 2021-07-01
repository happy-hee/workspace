// Q1. make a string out of an array
// 배열을 string으로 만들기 ('apple bnana orange')
// join('구분자')
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(', and');
    console.log(result); // apple, and banana, and orange
  }

  
  // Q2. make an array out of a string
  // string을 array로 만들기
  // split('구분자',갯수)
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',', 2);
    console.log(result); //["🍎", "🥝"]
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  // reverse()
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); //  [5, 4, 3, 2, 1]
    console.log(array); //  [5, 4, 3, 2, 1]
  }
  
  // Q4. make new array without the first two elements
  // 1과 2를 제외한 나머지 세개로 새로운 배열 만들기
  {
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(0, 2);
    // console.log(result); // [1, 2]
    // console.log(array); // [3, 4, 5]
    const result = array.slice(2,5)
    console.log(result);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  // 점수가 90점인 학생 찾기
  {
    const result = students.find((student) => student.score === 90);
    console.log(result); // Student('C', 30, true, 90)
  }
  
  // Q6. make an array of enrolled students
  // 
  {
    const result = students.filter((student) => student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // map: 배열 안에 들어있는 모든 요소들을 전달해준 콜백함수를 호출하면서 
  // 콜백함수에서 가공되어진, 리턴되어진 값으로 대체하는 것
  {
    const result = students.map((student) => student.score * 2);
    console.log(result); // [90, 160, 180, 132, 176]
  }
  
  // Q8. check if there is a student with the score lower than 50
  // 50점보다 낮은 학생이 있는지 체크하기
  {
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result); // true

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2); // else
  }
  console.clear();

  // Q9. compute students' average score
  // 평균점수 구하기
  {
    const result = students.reduce((prev, curr) => {
      console.log('-----------');
      console.log(prev);
      console.log(curr);
      return prev + curr.score;
    }, 0);
    console.log(result / students.length);
  }
  console.clear();

  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students
    .map((student) => student.score) // [45, 80, 90, 66, 88]
    .filter((score) => score >= 50) // (4) [80, 90, 66, 88]
    .join();
    console.log(result); //80,90,66,88
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  // 점수 정렬
  {
    const result = students
      .map((student) => student.score)
      .sort((a,b) => a - b)
      .join();
      console.log(result);
  }