let hello = "Hello from typescript";
let age = 19;
let namr = "Rodger Kumwanje";
let statement = `My name is ${namr}. I will be ${age + 1} years old`;
let tupletest = ['Beerus', 12, true];
console.log(tupletest[0].substring(1));
// enum datatype
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
let x = color.Green;
let colorname = color[2];
alert(colorname);
// void-no datatype
function notSure() {
    console.log('This does not have any datatype');
}
notSure();
