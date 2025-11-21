const fs = require("fs");
const {
  generateItemRow,
  generateTotalRow,
  createInventoryValuesReport,
} = require("../src/inventoryReport");

describe("generateItemRow", () => {
  test("generates a CSV row with name, quantity, price, and total", () => {
    const item = { name: "macaroon", quantity: 12, price: 3 };
    expect(generateItemRow(item)).toBe("macaroon,12,3,36");
  });

  test("returns null if quantity is zero (sold out)", () => {
    const item = { name: "cheesecake", quantity: 0, price: 12 };
    expect(generateItemRow(item)).toBeNull();
  });

  test("returns null if price is zero (free item)", () => {
    const item = { name: "napkins", quantity: 200, price: 0 };
    expect(generateItemRow(item)).toBeNull();
  });
});

describe("generateTotalRow", () => {
  test("calculates the total value of the inventory", () => {
    const items = [
      { name: "apple pie", quantity: 3, price: 15 }, // 45
      { name: "macaroon", quantity: 12, price: 3 }, // 36
    ];
    // 45 + 36 = 81
    expect(generateTotalRow(items)).toBe("Total,,,81");
  });
});

describe("createInventoryValuesReport (Integration)", () => {
  test("creates a CSV file with valid items and a total row", () => {
    const items = [
      { name: "apple pie", quantity: 2, price: 10 }, // 20
      { name: "cheesecake", quantity: 0, price: 12 }, // Should be skipped
      { name: "macaroon", quantity: 5, price: 2 }, // 10
    ];

    // 1. Execute the function
    createInventoryValuesReport(items);

    // 2. Verify the side effect (Read the file from disk)
    const fileContent = fs.readFileSync("./inventoryValues.csv", "utf-8");

    const expectedOutput =
      "apple pie,2,10,20\n" + "macaroon,5,2,10\n" + "Total,,,30";

    expect(fileContent).toBe(expectedOutput);
  });
});
