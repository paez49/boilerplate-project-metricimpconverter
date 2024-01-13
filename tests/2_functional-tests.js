const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test('Test valid input GET', function (done) {
        const expectedJson = {
            "initNum": 10,
            "initUnit": "L",
            "returnNum": 2.64172,
            "returnUnit": "gal",
            "string": "10 liters converts to 2.64172 galon"
          };
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=10L')
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.deepEqual(res.body, expectedJson );
            done();
          });
      });
      test('Test invalid unit GET', function (done) {
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=32g')
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.deepEqual(res.text, "invalid unit" );
            done();
          });
      });
      test('Test invalid number GET', function (done) {
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=3/7.2/4kg')
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.deepEqual(res.text, "invalid number" );
            done();
          });
      });
      test('Test invalid number and unit GET', function (done) {
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=3/7.2/4kilomegagram')
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.deepEqual(res.text, "invalid number and unit" );
            done();
          });
      });
      test('Test invalid number and unit GET', function (done) {
        const expectedJson = {
            "initNum": 1,
            "initUnit": "kg",
            "returnNum": 2.20462,
            "returnUnit": "lbs",
            "string": "1 kilograms converts to 2.20462 pounds"
          };
        chai
          .request(server)
          .keepOpen()
          .get('/api/convert?input=kg')
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.deepEqual(res.body, expectedJson );
            done();
          });
      });
});
