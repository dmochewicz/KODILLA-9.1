function getTriangleArea(a, h) {
	if((a > 0) && (h > 0)) console.log(a*h/2);
	else console.log("Nieprawid³owe dane");
	return(a*h/2)
}

var triangle1Area1 = getTriangleArea(2, 35);
var triangle1Area2 = getTriangleArea(3, 4);
var triangle1Area3 = getTriangleArea(10, 13);