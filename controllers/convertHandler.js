function ConvertHandler() {
  const units = ["gal","lbs","mi","L","kg","km"]
  this.getNum = function (input) {
    const indexResult = input.search(/[a-zA-Z]/);

    if (indexResult !== -1) {
      return input.slice(0, indexResult);
    } else {
      return input;
    }
  };

  this.getUnit = function (input) {
    const result = input.match(/[a-zA-Z]+/);

    if (result !== null) {
      console.log(result[0])
      if (units.includes(result[0].toLowerCase())){
        console.log(result[0])
        return result[0];
      }
    }
    return null;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
