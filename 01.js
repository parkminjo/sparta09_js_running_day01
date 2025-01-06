// 1. 빈칸 채우기 문제

let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
// 변수를 선언만 하고 할당하지 않았기 때문입니다

let apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// 값을 재할당하기 위해서는 let 키워드나 var 키워드를 사용해야 됩니다.

let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 배열의 index는 0부터 시작하기 때문입니다.

let mySchedule = "";
console.log(mySchedule || false); // < false >
// 빈문자열은 falsy한 값을 갖습니다. 논리합 연산자인데 둘다 false이기 때문에 false를 반환합니다.
console.log(!!mySchedule); // < false >
// 논리 부정 연산자를 사용했기 때문에 false -> true -> false의 순으로 진행되어 false를 반환합니다.
