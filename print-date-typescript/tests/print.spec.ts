import { PrintDate } from "../src/print";

describe("Test suite", () => {
  it("find a proper name for this test", () => {
    const printDate = new PrintDate();
    printDate.printCurrentDate();
  });
});
