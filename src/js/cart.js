import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./shoppingCart.mjs";

loadHeaderFooter();
getLocalStorage();

const cart = new ShoppingCart("so-cart", ".product-list");
cart.renderCartContents();
