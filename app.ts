let hello:string="Hello from typescript"
let age:number= 19;
let namr:string = "Rodger Kumwanje";

let statement = `My name is ${namr}. I will be ${age+1} years old`;

let tupletest:[string,number,boolean] = ['Beerus', 12, true]
console.log(tupletest[0].substring(1))

// enum datatype
enum color{Red, Green, Blue}
let x:color = color.Green;
let colorname:string = color[2]
alert(colorname)

// void-no datatype
function notSure():void{
    console.log('This does not have any datatype')
}

notSure();

