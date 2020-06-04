function log(val:any):void{
    console.log(val)
}

let addNumbers = (a:number, b:number):number =>{
    return a + b;
}

function addString(name:String, surname?:String):String{
     return `My name  is ${name} ${surname}`;
}

log(addString('Rodger', 'Kumwanje'));

// rest parameters
function builPerson(firstname:String, ...remainingNames:String[]){
    return firstname + " " + remainingNames.join()
}

let person1 = builPerson('john','Rodger','Hello','world','iot')
log(person1)