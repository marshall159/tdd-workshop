# 🥐 TDD: Inventory Report

## Setup
1. Run `npm install`
2. Run `npm test` or `npm run watch` to run in watch mode 
(It should say "Your test suite must contain at least one test" - this is good!)

## The Challenge
We need to generate a CSV report for our bakery inventory.
You will build this module step-by-step using **Strict TDD**.

### 🟢 Cycle 1: The Item Row
**Requirement:** Create a function `generateItemRow` that takes an item object and returns a CSV string.
- **Input:** `{ name: "macaroon", quantity: 12, price: 3 }`
- **Output:** `"macaroon,12,3,36"` (Name, Qty, Price, Total)

**Your TDD Steps:**
1. Create `inventoryReport.test.js`.
2. Write a test that calls `generateItemRow(item)` and expects the CSV string.
3. Run tests -> **RED**.
4. Create `inventoryReport.js` and export the function.
5. Implement the logic.
6. Run tests -> **GREEN**.

---

### 🔵 Cycle 2: Refactor
**Requirement:** Look at your string concatenation. Is it messy?
**Task:** Refactor your code to use an array `.join(",")` instead of template literals or `+`.
- Ensure tests remain **GREEN**.

---

### 🟢 Cycle 3: Business Rules (Filtering)
**Requirement:** The report should NOT include items that are sold out (Quantity 0) or free (Price 0). It should return `null`.

**Your TDD Steps:**
1. Write a test case passing `{ quantity: 0 }`. Expect `null`.
2. Run tests -> **RED**.
3. Implement the check.
4. Run tests -> **GREEN**.
5. Repeat for `{ price: 0 }`.

---

### 🟢 Cycle 4: The Footer (Totals)
**Requirement:** Create a `generateTotalRow` function that sums up the value of the entire inventory.
- **Input:** Array of items.
- **Output:** `"Total,,,81"` (Total value in the 4th column).

**Strategy:**
Since you are confident now, try a **Big Step**. Write the full test for this function, then implement the logic using `.reduce()`.

---

### 🟢 Cycle 5: Integration (The File System)
**Requirement:** Create `createInventoryValuesReport(items)`.
It should:
1. Generate rows for all valid items.
2. Append the Total row at the bottom.
3. Write the result to a file named `inventoryValues.csv` **in the current directory**.

**Your TDD Steps:**
1. Write a test that calls the function.
2. Use `fs.readFileSync("./inventoryValues.csv", "utf-8")` in your test to verify the content.
3. Run tests -> **RED** (File not found or content mismatch).
4. Implement the logic using `fs.writeFileSync("./inventoryValues.csv", content)`.
5. Run tests -> **GREEN**.
6. Check your file explorer—you should see the actual file!


## 🏁 Done early?
Want to add extra features? A header row?