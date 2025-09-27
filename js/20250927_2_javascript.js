// 변수 : 데이터를 저장하는 저장 공간. 필요할때 꺼내쓰고 다시 저장 가능.
// => 변수 선언 : var, let, const
// => 변수명 = 값; => 오른쪽에 있는 값을 왼쪽에 변수에 대입(저장)한다.

// let으로 변수 선언하기. => let은 값을 바꿀 수 있는 변수를 만들 때 사용.
// name이라는 변수를 만들고 '고길동'이라는 문자열을 저장.
let name = "고길동";
console.log("고길동");
console.log(name);  // 콘솔창에 "고길동" 출력

// name 변수의 값을 '둘리'로 변경
name = "둘리";
console.log(name); // 콘솔창에 "둘리" 출력

// let name = "마이콜"; // 에러발생 => let, const는 중복선언 불가

// const로 상수 선언하기. => const는 한번 정하면 바꿀수 없는 값을 저장.

// const는 원주율처럼 변하지 않는 값을 저장할 때 유용.
const PI = 3.14;
console.log(PI); // 콘솔창에 3.14 출력

// PI = 3.141592; // 에러발생 => const로 선언한 변수는 값을 변경할 수 없음


// 자료형 : 변수에 담을 수 있는 데이터의 종류 => 문자열, 숫자, 불리언.
// 문자열 : 큰따옴표(" ") 또는 작은 따옴표(' ')로 감싸는 글자들의 나열.
// 숫자 : 정수, 실수 등 숫자...
// 불리언 : true(참) 또는 false(거짓) 두가지 값만 가질 수 있는 자료형.
let message = '안녕하세요~~'; // 문자열
let age = 20;            // 숫자
let isStudent = true;   // 불리언

console.log(message);
console.log(age);
console.log(isStudent);
// typeof 연산자 : 변수에 담긴 데이터의 자료형을 알려주는 연산자.
// => typeof 변수명(값, 객체, 함수...)
console.log(typeof message);
console.log(typeof age);
console.log(typeof isStudent);

// 배열 : 여러개의 데이터를 순서대로 담는 목록을 말한다. => 배열은 []를 사용한다.

// fruits라는 이름의 변수에 여러개의 값을 배열로 저장.
let fruits = ['사과', '바나나', '딸기', '배']; // 배열 선언
console.log(fruits);

// 배열의 네 번째 항목(요소)에 접근하기 => 배열명[인덱스번호]
console.log(fruits[3]); // 배열의 네 번째 요소 출력 => 배

// 배열의 첫번째 항목에 접근하기.
console.log(fruits[0]); // 배열의 첫번째 요소 출력 => 사과

// 배열에 새로운 항목 추가 => 배열명.push(값);
fruits.push('샤인머스켓');
console.log(fruits); // ['사과', '바나나', '딸기', '배', '샤인머스켓'] 출력

// 배열의 길이(항목의 개수) 확인 => 배열명.length
console.log('fruits 배열의 항목의 개수 : ' + fruits.length);