// 온라인 쇼핑몰 장바구니 계산하기

// -- 쇼핑몰 장바구니 --

// 부가세율 => 절대 바뀌지 않으므로 상수로 선언(const)
const TAX_RATE = 0.1; // 10%

// 장바구니 총액은 계속 변할 수 있으므로 변수로 선언(let)
// 변수를 초기화 한다. => 변수를 선언할때 최초의 값을 저장하는 것을 말한다.
let cartTotal = 0; // cartTotal의 값을 0으로 초기화.

// 장바구니 총액 출력.
console.log("장바구니 총액: " + cartTotal + "원");

// cartTotal = cartTotal + 5000; // cartTotal + 5000을 하고 다시 cartTotal에 저장.
// console.log("장바구니 총액: " + cartTotal + "원");

// 1. 3000원짜리 티셔츠를 장바구니에 담았습니다.
cartTotal = cartTotal + 3000;
console.log("장바구니 총액: " + cartTotal + "원");

// 2. 50000원짜리 청바지를 장바구니에 담았습니다.
cartTotal = cartTotal + 50000;
console.log("장바구니 총액: " + cartTotal + "원");

// 3. 최종 결제금액 계산 => 총액 + 부가세
console.log("부가세 : " + cartTotal * TAX_RATE + "원")
cartTotal = cartTotal + (cartTotal * TAX_RATE); // 부가세 포함 최종 결제금액 계산


console.log("-----------------------------");
console.log('최종 결제금액 : ' + cartTotal + '원 (부가세 포함)');