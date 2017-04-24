let util = require('util');
let Shape = require('ull-shape-ivan-ga');
var Triangle = require('./triangle.js');

 try {
  let arg = process.argv[2] || '{"width":9, "height":5}';
  let obj = JSON.parse(arg);
  let type = process.argv[3] || 'Triangle';
  let t = new Shape(obj, type);
  let s = t.getArea();
  console.log(s);

  t = new Shape({ width: 100, height: 100 }, 'Triangle');
  s = t.getArea();
  console.log(s);

  let a = new Triangle({ width: 100, height: 100 });
  s = a.getArea();
  console.log(s);
  
  
}
catch (e) {
  console.log(e.message);
}
