// 놀이공원 입장료 계산하기

// 나이에 따라서 입장료가 다르다.
// 1. 나이가 65세이상이거나 10세 미만이면 입장료는 5,000원
// 2. 청소년(10 ~ 19세)이면 입장료는 8,000원
// 3. 위 경우 외에는 입장료는 10,000원

// prompt() : 사용자에게 메시지와 함께 텍스트를 입력할 수 있는 대화상자를 나타낸다.
// 간단한 실습이나 테스트에는 유용하다.
// prompt로 받는 값은 문자열이다. => 숫자 인식 못함.
// Number() 함수를 이용해서 숫자를 문자열로 형변환을 한다.
// let age1 = prompt("나이를 입력하세요.");
// alert("나이는 " + Number(age1) + "세 입니다.")

let age = 0;
let price = 0;

// prompt() 함수를 이용해서 사용자에게 나이를 입력 받는다.
// prompt() 함수 사용시 꼭 const로 선언하지 않아도 된다.
let age1 = prompt("나이") // prompt()로 입력받은 값은 문자열이기 때문에 숫자로 변환후 age에 저장해야 한다.
age = Number(age1)
console.log("나이 : " + age)

if(age >= 65 || age < 10) {
  price = 5000;
  console.log("=== 경로 / 유아 할인 대상 ===")
} else if(age < 20) {
  price = 8000
  console.log("=== 청소년 할인 대상 ===")
} else {
  price = 10000
  console.log("=== 일반 ===")
}

console.log("나이 : " + age + "세");
console.log("입장료 : " + price + "원")
