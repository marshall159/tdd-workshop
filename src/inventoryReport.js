const fs = require("fs");

const generateItemRow = (item) => {
  // Requirement: Filter out sold-out or free items
  if (item.quantity === 0 || item.price === 0) {
    return null;
  }

  return [
    item.name,
    item.quantity,
    item.price,
    item.price * item.quantity,
  ].join(",");
};

const generateTotalRow = (items) => {
  // Requirement: Calculate sum of (Price * Qty)
  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // Requirement: Format in the 4th column
  return `Total,,,${total}`;
};

const createInventoryValuesReport = (items) => {
  // Step 1: Generate item rows (and remove the nulls)
  const itemRows = items
    .map(generateItemRow)
    .filter((row) => row !== null) // Crucial step: remove the "skipped" items
    .join("\n");

  // Step 2: Generate total
  const totalRow = generateTotalRow(items);

  // Step 3: Combine
  const reportContent = `${itemRows}\n${totalRow}`;

  // Step 4: Write to local directory
  fs.writeFileSync("./inventoryValues.csv", reportContent);
};

module.exports = {
  generateItemRow,
  generateTotalRow,
  createInventoryValuesReport,
};
