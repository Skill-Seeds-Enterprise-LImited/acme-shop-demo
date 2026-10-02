// Totals for the Acme Shop demo cart.
const cart = [
  { name: "Mug", price: 12 },
  { name: "T-shirt", price: 25 },
];

function total(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

function formatTotal(amount) {
  return "$" + amount;
}

document.getElementById("cart").textContent = "Total: " + formatTotal(total(cart));
