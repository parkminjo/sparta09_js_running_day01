// 6. 장바구니 뒤바뀜 문제

// 아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.
// B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.

function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

const userBCart = userACart;
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

// 1. 실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
// ACart와 BCart 모두 item 배열 안에 있는 price의 값이 25000, 15000으로 바뀌어 있습니다.

// 2. 1번의 결과에 대한 이유를 설명해보세요.
//userBCart에 userACart의 데이터가 저장되어있는 주소를 그대로 할당했기 때문에, 둘다 동일하게 값이 바뀌게 됩니다.

// 3. 원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데, 그렇게 하려면 코드를 어떻게 수정해야 할까요?
// 코드
// const userBCart = {};
// userBCart.items = userACart.items;

// userBCart라는 빈 객체로 따로 만들어준 뒤, userACart의 items 값만 따로 할당해주면 됩니다.
