function printClass(a) {
    console.log(a);
    return null;
}
class ClassA {
    print() {
        console.log('ClassA.print');
    }
}
class ClassB {
    print() {
        console.log(`ClassB.print()`);
    }
}
