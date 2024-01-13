const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests Numbers", function () {
  test("Whole number", function () {
    let res = convertHandler.getNum("3mi");
    assert.strictEqual(res, 3, "Should be 3 as number");
    assert.typeOf(res, "number");
  });
  test("Decimal number", function () {
    let res = convertHandler.getNum("3.3mi");
    assert.strictEqual(res, 3.3, "Should be 3.3 as number");
    assert.typeOf(res, "number");
  });
  test("Fractional", function () {
    let res = convertHandler.getNum("3/2mi");
    assert.strictEqual(res, 1.5, "Should be 1.5 as number");
    assert.typeOf(res, "number");
  });
  test("Fractional with decimal", function () {
    let res = convertHandler.getNum("3.3/2mi");
    assert.strictEqual(res, 1.65, "Should be 1.65 as number");
    assert.typeOf(res, "number");
  });
  test("Default number", function () {
    let res = convertHandler.getNum("mi");
    assert.strictEqual(res, 1, "Should be 1 as number");
    assert.typeOf(res, "number");
  });
  test("Error double fraction", function () {
    let res = convertHandler.getNum("3/2/3mi");
    assert.isNull(res, "Should return null");
  });
});
suite("Unit Tests Units", function () {
  const unitsAndConvertionUnit = [
    ["gal", "L"],
    ["lbs", "kg"],
    ["mi", "km"],
    ["L", "gal"],
    ["kg", "lbs"],
    ["km", "mi"],
  ];
  const spelledOutUnits = [
    ["gal", "galon"],
    ["lbs", "pounds"],
    ["mi", "miles"],
    ["L", "liters"],
    ["kg", "kilograms"],
    ["km", "kilometers"],
  ];
  test("Valid unit", function () {
    let res = convertHandler.getUnit("3mi");
    assert.equal(res, "mi", "Should return a mile unit");
  });
  test("Invalid unit", function () {
    let res = convertHandler.getUnit("3yrd");
    assert.isNull(res, "Should return a null");
  });
  test("Correct return unit", function () {
    for (let units of unitsAndConvertionUnit) {
      let res = convertHandler.getReturnUnit(units[0]);
      assert.equal(res, units[1], `When ${units[0]} must return ${units[1]}`);
    }
  });
  test("Spelled-out units", function () {
    for (let units of spelledOutUnits) {
      let res = convertHandler.spellOutUnit(units[0]);
      assert.equal(res, units[1]);
    }
  });
});

suite("Unit Tests Convertions", function () {
  test("Galons to liters", function () {
    let res = convertHandler.convert(1, "gal");
    assert.equal(res, 3.78541);
  });
  test("Liters to galons", function () {
    let res = convertHandler.convert(1, "L");
    assert.equal(res, 0.26417);
  });
  test("Miles to kilometers", function () {
    let res = convertHandler.convert(1, "mi");
    assert.equal(res, 1.60934);
  });
  test("Kilometers to miles", function () {
    let res = convertHandler.convert(1, "km");
    assert.equal(res, 0.62137);
  });
  test("Pounds to kilograms", function () {
    let res = convertHandler.convert(1, "lbs");
    assert.equal(res, 0.45359);
  });
  test("Kilograms to pounds", function () {
    let res = convertHandler.convert(1, "kg");
    assert.equal(res, 2.20462);
  });
});
