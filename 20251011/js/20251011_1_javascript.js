console.log("20251011_1_javascript.js 파일 실행 중");

// 함수 : 특정 작업을 수행하는 코드 블럭을 의미한다. 
//      => 반복적인 코드 작성을 줄일 수 있다.
//      => 코드의 재사용성을 높여준다.

// 일반 함수의 형식
// function 함수이름([인수1, 인수2, ...]) {
//    함수가 실행할 문장;
//    ...;
//    [return 반환값;]
// }

// 함수 정의 => 함수 만들기
function sayHello() {
  console.log('안녕하세요~');

}

// 함수 호출 => 함수 사용.
sayHello();
sayHello(); // 함수를 또 호출하면 다시 함수가 실행된다.

// 매개변수를 사용하는 함수. => name이라는 매개변수를 받는 함수.
function greet(name) {
  console.log(name + '님 안녕하세요~~');
}

// 함수를 호출할 때 각각의 인자를 전달.
greet("고길동"); // 고길동님 안녕하세요.
greet('둘리')

// 반환값(return)이 있는 함수 => 함수 실행이 종료될때 호출 한 위치로 반환값을 내보낸다.
function add(a, b) {
  let result = a + b;
  return result; // return a + b;
}

let result = add(5, 3);
console.log(result);

console.log(add(4, 3))
