console.log('20251011_4_javascript.js 파일 실행')

// 점수 계산하는 함수 => 총점과 평균을 구하는 함수.
// => 숫자로 이루어진 배열을 매개변수로 전달 받는 함수.
// => 반환값(return)값이 없는 함수.
function score(scoreArray) {
  // scoreArray의 점수들의 총점과 평균을 나타낸다.
  let add = 0; // 총점
  let avg = 0; // 평균
  
  // for문을 이용한 배열 요소들의 합계를 구한다. => 총점
  for(let i = 0; i < scoreArray.length; i++) {
    add += scoreArray[i];
  }

  // 총점과 평균을 구한다.
  console.log('총점 : ' + add);
  console.log('평균 : ' + add / scoreArray.length);

}

// 1. A반 학생들의 점수
let classA = [80, 90, 100, 75];
score(classA);
console.log('=============================')

// 2. B반 학생들의 점수
let classB = [65, 88, 92, 78, 95];
score(classB);