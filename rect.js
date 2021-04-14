
var area = (x,y)=>x*y;

//module.exports.calBoth = calBoth, must put below the code;
module.exports.calArea = area;

//or w/o calArea 
// module.exports = area

var calBoth = {
    area : (x,y) => x*y,
    perimeter : (x,y) => 2*(x+y)
}
module.exports.calBoth = calBoth;
