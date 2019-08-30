//var rect = {
    //perimeter: (x, y) => (2*(x+y)),
    //area: (x, y) => (x*y)
  //};

//module.exports = rect;

//exports.perimeter = (x, y) =>{ (2*(x+y)) };

//exports.area = (x, y) =>{ (x*y) };

module.exports = (x,y,callback) => {

  if (x <= 0 || y <= 0)

   callback( Error("Rectangle dimensions should be greater than zero: l = " + x + " and b =" + y), null);
  
  else
  
   callback(null, { perimeter: () => (2*(x+y)), area:() => (x*y) })
  
    }