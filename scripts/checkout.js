import { loadProducts, loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentsummary } from "./checkout/paymentSummary.js";
import { loadCart } from "../data/cart.js";
//import "../data/cart-class.js";
//import "../data/backend-practice.js";

async function loadPage() {
  try {
    //throw "error1";

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      //throw "error2"; manualy create sync error
      loadCart(() => {
        //reject("error3"); manualy create async error
        resolve("value");
      });
    });
  } catch (error) {
    console.log("unexpected error. please try again later");
  }

  renderOrderSummary();
  renderPaymentsummary();
}
loadPage();
/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then(() => {
  renderOrderSummary();
  renderPaymentsummary();
});
*/

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve("value1");
//   });
// })

//   .then((value) => {
//     console.log(value);
//     return new Promise((resolve) => {
//       loadCart(() => {
//         resolve();
//       });
//     });
//   })

//   .then(() => {
//     renderOrderSummary();
//     renderPaymentsummary();
//   });

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentsummary();
//   });
// });
