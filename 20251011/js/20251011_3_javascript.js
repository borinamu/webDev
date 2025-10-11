console.log('20251011_3_javascript.js 파일 실행')

// 사각형 넓이 계산 함수

// 1. width와 height라는 두 매개변수를 받는 함수를 만든다.
// => 가로(width)와 세로(height)가 0보다 큰 값인지 확인하고 0보다 클때 넓이를 계산한다.
// => 구한 너비는 반환한다.

function calcArea(width, height) {

  if(width > 0 && height > 0) {
    let area = width * height;
    return area;
  } else {
    return '가로와 세로의 길이는 0보다 커야 됩니다.';
  }

} 

// 2. 함수 호출 => 가로 : 10 / 세로 : 5인 사각형의 넓이
let area1 = calcArea(10, 5)
console.log('사각형의 넓이 => ' + area1);

// 3. 함수 호출 => 가로 : 20, 세로 : 15인 사각형의 넓이
let area2 = calcArea(20, 15)
console.log('사각형의 넓이 => ' + area2);

// 4. 잘못된 값을 넣었을 경우 => 잘못입력되었다는 내용이 나온다.
let area3 = calcArea(-5, 10);
console.log('사각형의 넓이 => ' + area3);

