var Shape = require('@ivan-ga/ull-shape-ivan-ga');
var Triangle = require('../triangle.js');
var should = require('should');


describe("getArea", function() {
  it("must compute the triangle area correctly. Shape object", function() {
    let a = new Shape({ width: 100, height: 50 }, 'Triangle');
    let s = a.getArea();
    s.should.equal(2500);
  })
});
