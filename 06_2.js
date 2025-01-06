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

const userBCart = {};
const coupon = { discount: 5000 };

userBCart.items = userACart.items;

applyCoupon(userBCart, coupon);
