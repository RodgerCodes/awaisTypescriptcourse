interface IcomplexType {
    id:number,
    name:String
}

let complexType:IcomplexType = {
    id:1, 
    name:"Rodger"
}

interface Point{
    // read only property
   readonly x:number,
    readonly y:number
}

let p1:Point ={
    x:2,
    y:2
}

// p1.x = 4;
console.log(p1)