function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

// let copyDeep2 = function (object) {
//   let deepCopyobj = {};
//   if (object !== null && typeof object === "object") {
//     for (let key in object) {
//       deepCopyobj[key];
//       deepCopyobj[key] = copyDeep(object[key]);
//     }
//   } else {
//     deepCopyobj = object;
//   }

//   console.log(deepCopyobj);
//   return deepCopyobj;
// };

const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

const coupon = { discount: 5000 };
let copyDeep1 = JSON.parse(JSON.stringify(userACart));
const userBCart = copyDeep1;

applyCoupon(userBCart, coupon);
