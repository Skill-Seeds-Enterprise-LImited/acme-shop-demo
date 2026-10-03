// Totals for the Acme Shop demo cart.
const cart = [
  { name: "Mug", price: 12 },
  { name: "T-shirt", price: 25 },
];

function total(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

/** A promo code takes a percentage off the total — it never replaces it. */
function applyPromo(amount, code) {
  const promos = { SAVE10: 0.1 };
  const off = promos[code] ?? 0;
  // Never let a discount take the basket below zero, or to zero by mistake.
  return Math.max(0, Math.round(amount * (1 - off) * 100) / 100);
}

function formatTotal(amount) {
  return "$" + amount.toFixed(2);
}

const promo = (new URLSearchParams(location.search).get("promo") || "").trim().toUpperCase();
document.getElementById("cart").textContent = "Total: " + formatTotal(applyPromo(total(cart), promo));
