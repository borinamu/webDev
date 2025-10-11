console.log('20251011_2_javascript.js 파일 실행')

// 인사말 생성 함수 => ~님, 환영합니다! 오늘 하루도 힘내세요~~
// 1. name이라는 이름의 매개변수를 전달 받는 함수를 만든다.
function createGreeting(name) {
  let message = name + '님, 환영합니다. 오늘 하루도 힘내세요~~';
  return message;
}


// 2. 함수를 호출하고, 그 결과물을 greeting1이라는 변수에 저장한다.
  let greeting1 = createGreeting('고길동');
  console.log(greeting1)

// 3. 다른 이름으로 함수를 재호출(재사용) 한다.
let greeting2 = createGreeting('둘리');
console.log(greeting2);