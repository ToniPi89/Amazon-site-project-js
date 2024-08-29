export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2); // issue with rounding, i put Math.round to fix it
}

export default formatCurrency;
