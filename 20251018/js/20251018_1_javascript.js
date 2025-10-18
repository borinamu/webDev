
// DOM(Document Object Model)
// => html 웹문서를 자바스크립트가 이해하고 제어할 수 있도록 객체 형태의 트리구조로 표현한 모델.
// html => 족보 
// html 태그 => 특정 가족 구성원
// DOM => 특정 가족구성원에 접근하여 정보를 바꾸거나 행동을 지시할 수 있는 설계도.
// DOM은 정적인 html 문서와 동적인 자바스크립트를 연결해주는 다리 역할을 한다.

// DOM은 모든 태그와 텍스트를 노드라는 단위로 취급한다. => 부모 - 자식 관계의 계층을 이룬다.
// 문서 노드 : 전체 문서를 대표하는 최상위 노드
// 요소 노드 : <h1>, <div> ... 과 같은 html 태그
// 텍스트 노드 : 태그안에 있는 글자들.

// querySelector() : 하나의 css 선택자를 사용해 해당하는 첫번째 요소 하나를 찾아낸다.
// 1. id로 선택하기 => #
let containerDiv = document.querySelector("#container");
console.log("id로 선택 : " + containerDiv);

// 2. 클래스로 선택하기 => .
let firstContent = document.querySelector(".content");
console.log("클래스로 선택 : ", firstContent);

// 3. 태그 이름으로 선택하기
let titleHeader = document.querySelector("h1");
console.log("태그로 선택 : " + titleHeader);

// querySelectorAll() : css 선택자를 사용하지만, 조건에 맞는 모든 요소를 전부 찾아
// 목록으로 만들어 반환한다.
// => 여러 요소에 동일한 작업을 한 번에 적용하고 싶을때 사용.
// => 반환값 : 조건에 맞는 모든 요소를 배열과 비슷한 NodeList에 담아서 반환한다.
console.log("=====================================")

// 클래스가 'content'인 모든 p 태그를 선택.
let allContents = document.querySelectorAll(".content");
console.log(allContents);  // 2개의 p태그가 담긴 NodeList가 출력됨.
console.log(allContents[0]);  // 배열처럼 인덱스로 접근 가능.
console.log(allContents[1]); 

// foreach() : 배열의 각 요소를 한번씩 순서대로 순회하면서, 주어진 함수를 실행하는 함수.
// => for 반복문을 더 간결하고 읽기 쉽게 표현할 수 있다.
// allContents.forEach(function(element) {
//   element.style.color = 'blue';
// });

for(let i=0; i<allContents.length; i++) {
  allContents[i].style.color ='red';
}

// getElementById() : id속성을 이용해서 요소를 찾아낸다.
// id가 'container'인 요소 선택 => #은 붙이지 않는다.
let containerById = document.getElementById('container');
console.log(containerById);

// getElementByClass() : 클래스 이름을 이용해 해당하는 모든 요소를 찾는다.
let contentByClass = document.getElementsByClassName('content');
console.log(contentByClass);
console.log(contentByClass[1]);

for(let i=0; i<contentByClass.length; i++){
  contentByClass[i].style.border = '1px solid black';
}

// getElementByTagName() : 태그 이름을 이용해 해당하는 모든 요소를 찾는다.
let pByTagName = document.getElementsByTagName("p");
console.log(pByTagName);
