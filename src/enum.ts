//数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest,
}

//实现原理 反向映射，名称作为key，值作为了value
// "use strict";
// var Role;
// (function (Role) {
//     Role[Role["Reporter"] = 1] = "Reporter";
//     Role[Role["Developer"] = 2] = "Developer";
//     Role[Role["Maintainer"] = 3] = "Maintainer";
//     Role[Role["Owner"] = 4] = "Owner";
//     Role[Role["Guest"] = 5] = "Guest";
// })(Role || (Role = {}));

//字符串枚举不能反向映射

//异构枚举 不建议用 （又有数字又有字符串）

//枚举成员
//常亮枚举成员会直接计算出值。但是computed 会在运行时才执行，并且需要附初始值


//常量枚举

//接口返回判断
interface List {
    readonly id: number;
    name: string;
    //[x:string]:any:
    age?: number;//可有可无
}
interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(value => {
        if (value.age) {
            //需要增加可选属性
            console.log(value.age)
        }
    })
}
let result = {
    data: [{ id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }]
}
//传入对象只要满足条件 哪怕有多余字段 也可以满足

render(result)
//如果直接传入的是整个对象

render({
    data: [{ id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }]
} as Result)

//render(<Result{
//     data:[{id:1,name:'A',sex:'male'},
//     {id:2,name:'B'}]
// })
//也可以实现 但是在react 中会引起歧义

//第三种字符串索引签名
//【x:string】:any




interface Stringarray{
    [index:number] :string
}

let chars: Stringarray = ['a','b']

interface names {
    [x:string]:string | number;
    // y:number
    [z:number]:number;
    //数字类型的索引必须是字符串索引的子类型。javascript 比较的时候会把数字转化为string
}