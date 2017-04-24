"use strict"
let Sh = require('@ivan-ga/ull-shape-ivan-ga');
let Shape = Sh.Shape

class Triangle extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return 0.5 * this.width * this.height;
    }
}
Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;
