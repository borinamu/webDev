console.log('20251011_5_javascript.js 파일 실행')

// 객체(object) => 이름(key)과 값(value)이 한쌍으로 이루어진 데이터의 모음. => {key : value}
// => 사물과 같이 속성(데이터)과 동작(메서드)을 하나로 묶어놓은 데이터의 모음.

// {}를 이용해서 객체 만들기.
const student = {
  name : '고길동', 
  major : '컴공', 
  level : 2, 
  sayHello : function() {
    
    console.log('안녕하세요~');
  }
}

console.log(student)

// 생성자 함수를 이용해서 객체 만들기.
// => Object 생성자를 이용할 수 있다.
const car = new Object();
car.name = 'ev3';
car.brand = 'kia';
car.price = '40000000';

console.log(car);

// 객체 속성 접근 및 수정
// => '.'을 이용한다.
// => []을 이용한다.

const person = {name : '고길동', age : 30}

// 속성 값 읽기 => 객체이름.key
console.log(person.name); // 고길동
console.log(person.age); // 30

// 속성 값 변경
person.name = '둘리';
person.age = 20;
console.log(person);

const person2 = {name : '마이콜', age : 25};
// 객체이름['key']
console.log(person2['name'])
let propName = 'age';
console.log(person2[propName]);

// 속성 추가 및 삭제
// => 속성추가 : 존재하지 않는 key에 값을 할당하면 새로운 속성이 추가됩니다.
// => 속성삭제 : delete 연산자를 사용해서 속성을 삭제할 수 있다.

// 속성 추가
person.job = '백수';  // 점표기법으로 추가
person['hobby'] = '숨쉬기' // 괄호 표기법을 이용해서 추가.

console.log(person);

// 속성 삭제
delete person.hobby;
console.log(person);

// 객체 메서드 : 객체의 value값이 함수일 경우 이걸 메서드라고 한다. => 해당 객체와 관련된 동작을 정의.
const calc = {
  add : function(a, b) {
    return a + b;
  },
  subtract : function(a, b) {
    return a - b;
  }
};

console.log(calc.add(5, 3));
console.log(calc.subtract(5, 3));

// this => 메서드 안에서 사용하면 해당 메서드를 포함하고 있는 객체 자신을 가리킨다.
// => 객체의 다른 속성에 접근 할 수 있다.
const person3 = {
  name : '도우너',
  greet : function() {
    // `(백틱 / 그레이브)을 이용한 출력
    // 'this'는 person3 객체를 가리킨다.
    console.log(`안녕하세요. 제 이름은 ${this.name}입니다.`)
  }
}

person3.greet();