function getTriangleArea(a, h) {
	if((a > 0) && (h > 0)) return a*h/2;
	else return("Nieprawid³owe dane");
	
}

var triangle1Area1 = getTriangleArea(2, 35);
var triangle1Area2 = getTriangleArea(3, 4);
var triangle1Area3 = getTriangleArea(10, 13)

console.log(triangle1Area1);
console.log(triangle1Area2);
console.log(triangle1Area3);