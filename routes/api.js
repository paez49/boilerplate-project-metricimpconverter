'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.get('/api/convert', function (req, res) {
    let initNum = convertHandler.getNum(req.query.input)
    let initUnit = convertHandler.getUnit(req.query.input)
    if (initNum == ""){
      initNum = 1
    }
    if( initUnit == null){
      res.type("txt").send("invalid unit");
    }
    res.type("txt").send(initUnit)
  })
};
