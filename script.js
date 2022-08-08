import { a } from "./products.js";
var ele1 = document.getElementById("firstbutton");
ele1.addEventListener("click", idselect);

function idselect() {
  var v = parseInt(prompt("Enter the id number"));
  a.find((p) => p.id == v).qty++;
  updateCart();
}
var ele3 = document.getElementById("cartbutton");
function updateCart() {
  cart = [];
  cart = a.filter((p) => p.qty > 0);
  console.log(cart);
}
var ele4 = document.getElementById("removeitem2");
ele4.addEventListener("click", removeItem);

function removeItem() {
  var v = parseInt(prompt("Enter the id number"));
  a.find((p) => p.id == v).qty = 0;
  updateCart();
}
