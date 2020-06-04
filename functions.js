function log(val) {
    console.log(val);
}
let addNumbers = (a, b) => {
    return a + b;
};
function addString(name, surname) {
    return `My name  is ${name} ${surname}`;
}
log(addString('Rodger', 'Kumwanje'));
// rest parameters
function builPerson(firstname, ...remainingNames) {
    return firstname + " " + remainingNames.join();
}
let person1 = builPerson('john', 'Rodger', 'Hello', 'world', 'iot');
log(person1);
