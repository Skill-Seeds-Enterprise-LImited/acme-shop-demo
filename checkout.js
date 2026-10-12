// Totals for the Acme Shop demo cart.
const cart = [
  { name: "Mug", price: 12 },
  { name: "T-shirt", price: 25 },
];

function total(items) {
  // A checkout without a cart yet (or an item that was removed) counts as nothing, not a crash.
  return (items ?? []).reduce((sum, item) => sum + (item?.price ?? 0), 0);
}

/** The basket total for a checkout; one whose cart hasn't loaded yet totals $0.00. */
function computeCartTotal(checkout) {
  return total(checkout?.cart);
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
document.getElementById("cart").textContent = "Total: " + formatTotal(applyPromo(computeCartTotal({ cart }), promo));
