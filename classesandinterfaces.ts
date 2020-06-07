
interface Iprint{
    print();
}

function printClass(a:Iprint){
    console.log(a)
    return null;
}

class ClassA implements Iprint{
    print():void{
        console.log('ClassA.print');
    }
}


class ClassB implements Iprint{
    print():void{
        console.log(`ClassB.print()`);
    }
}

