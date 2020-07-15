interface Human{
    // new(name:string):void
    name:string;
    eat():void
}
//接口只能约束类的公有成员
class Asian implements Human{
    constructor(name :string){
        this.name =name
    }
    name:string
    eat(){}
    sleep(){}
}


//////////////////////////////////////////////////////
//接口可以像类一样继承，并且一个接口可以继承多个接口
interface Man extends Human{
    run():void
}
interface Child{
    cry():void
}

interface Boy extends Man,Child{}

let boy:Boy={
    name:'',
    run(){},
    eat(){},
    cry(){}
}
//////////////////////////////////////////////////////
//接口继承类 

class Auto {
    state =1 
    private state2 =0
}
interface AutoInterface extends Auto{

}

// class C implements AutoInterface{
//     state= 1
// }

//auto的子类也可以 继承AutoInterface

class Bus extends Auto implements AutoInterface{
    //不在需要state属性 已经被继承 
    //接口不仅会抽离公共成员 同时会抽离私有成员和受保护成员
}

//接口可以相互继承，实现接口服用
//类也可以继承，实现方法和属性的复用
//接口可以通过类来实现，但是能约束公用成员
//接口可以抽离出类的成员，包括公有 私有和受保护成员