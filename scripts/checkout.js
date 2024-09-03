import { loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentsummary } from "./checkout/paymentSummary.js";

//import "../data/cart-class.js";
//import "../data/backend-practice.js";

loadProducts(() => {
  renderOrderSummary();
  renderPaymentsummary();
});
