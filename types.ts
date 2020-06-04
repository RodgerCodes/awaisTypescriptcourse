// union types

let uniontype:string|number|boolean;
uniontype =1;
uniontype="Hello";
uniontype=true

// type guards
function addGurd(arg1:string|number, arg2:string|number):string|number{

    if(typeof arg1 === "string"){
       console.log('First argument is a String')
       return arg1+arg2;
    }

    if(typeof arg2 === "string"){
        console.log("The second argument is also a string")
        return arg1+arg2;
    }
    return arg1.toString() + arg2.toString();
}

addGurd(2, 5)

// type aliase
type stringorNumber = string|number;
function aliases(arg1:stringorNumber, arg2:stringorNumber){
    return arg1.toString() + arg2.toString()
}

// null and undefined

