function ConvertHandler() {
  const units = ["gal", "lbs", "mi", "kg", "km"];
  this.getNum = function (input) {
    const indexResult = input.search(/[a-zA-Z]/);

    if (indexResult !== -1 && indexResult !== 0) {
      let stringNum = input.slice(0, indexResult);
      let result;
      if (stringNum.includes("/")) {
        if ((stringNum.match(/\//g) || []).length > 1) {
          result = null;
        } else {
          let frac = eval(stringNum);
          result = parseFloat(frac);
        }
      } else {
        result = parseFloat(stringNum);
      }
      return result;
    }
    return 1;
  };

  this.getUnit = function (input) {
    const result = input.match(/[a-zA-Z]+/);

    if (result !== null) {
      if (result.includes("L") || result.includes("l")) {
        return "L";
      }
      if (units.includes(result[0].toLowerCase())) {
        return result[0].toLowerCase();
      }
    }
    return null;
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit) {
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch (unit) {
      case "gal":
        result = "galon";
        break;
      case "L":
        result = "liters";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
    }

    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let realInitUnit = this.spellOutUnit(initUnit);
    let realReturnUnit = this.spellOutUnit(returnUnit);
    return `${initNum} ${realInitUnit} converts to ${returnNum} ${realReturnUnit}`;
  };
}

module.exports = ConvertHandler;
