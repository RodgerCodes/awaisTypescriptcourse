class simpleclass {
    print(name, age) {
        console.log(`My name is ${name} and i am ${age} years old `);
    }
    instance() {
        console.log(`simpleclass has id: ${this.id}`);
    }
}
let classes = new simpleclass();
classes.id = 12;
classes.print("Rodger", 19);
classes.instance();
