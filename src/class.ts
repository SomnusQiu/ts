
//ts与es不同的是添加了类型注解，无论在es或者ts 中 类成员的属性 都是实例属性 而不是原型属性 ， 类成员的方法 都是 原型 方法
//与es不同的是 实例的值必须要有一个出事的值或者在构造函数中初始化或者 申明为可选属性
class Dog{
    constructor(name:string){    //private 既不能被实例化也不能被继承  protected 不能被实例化 只能继承
        this.name = name
    }
    name:string
    run(){}
    private pri(){}
    protected pro(){}
    readonly legs :number =4 //只读属性必须初始化
    static food :string = 'bones'//只能通过类名来调用
}
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)
// dog.pri()
// dog.pro()
console.log(Dog.food)

class husky extends Dog{
    constructor(name:string,public color:string){
        super(name)
        this.color = color
        //this 要在 super之后
        // this.pri()
        this.pro()
    }
    // color:string;
}

console.log(husky.food)//静态成员可以继承