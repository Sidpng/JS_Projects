let side1 = prompt("Enter the length of the first side of the triangle");
let side2 = prompt("Enter the length of the second side of the triangle");
let side3 = prompt("Enter the length of the third side of the triangle");

if (side1 == side1 && side2 == side3){
    alert("Equilateral triangle");
}
else if (side1 == side2 && side2 == side3){
    alert("Isosceles triangle");
}
else if (side1 == side3 && side2 == side1){
    alert("Scalene triangle");
}
else {
    alert("Not a triangle");
}