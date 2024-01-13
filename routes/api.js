"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", function (req, res, next) {
    let initNum = convertHandler.getNum(req.query.input);
    let initUnit = convertHandler.getUnit(req.query.input);
  
    if (initNum == null && initUnit == null) {
      res.type("txt").send("invalid number and unit");
      return;
    }
    if (initUnit == null) {
      res.type("txt").send("invalid unit");
      return;
    }
    if (initNum == null || initNum == undefined) {
      res.type("txt").send("invalid number");
      return;
    }
    
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let string = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );
    res.json({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: string,
    });
  });
};
