// union types
let uniontype;
uniontype = 1;
uniontype = "Hello";
uniontype = true;
// type guards
function addGurd(arg1, arg2) {
    if (typeof arg1 === "string") {
        console.log('First argument is a String');
        return arg1 + arg2;
    }
    if (typeof arg2 === "string") {
        console.log("The second argument is also a string");
        return arg1 + arg2;
    }
    return arg1.toString() + arg2.toString();
}
addGurd(2, 5);
function aliases(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
// null and undefined
