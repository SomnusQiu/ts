let bool: boolean = true
let num:number =123
let str: string = 'abc'
//str = 123

//数组
let arr1: number[]=[1,2,3]
let arr2: Array<number | string>=[1,2,3,'4']

//元组
let tuple: [number,string] =[0,'1']

// tuple.push(2)
// console.log(tuple)
// tuple[2]
//可以越界但是无法访问，不建议这么做

//函数 
let add1 =(x:number,y:number):number =>x+y
 let add2 =(x:number,y:number) =>x+y 
 //add 1跟add2 一样 依靠ts 类型推断

 let compute:(x:number,y:number)=>number
 compute=(a,b) =>a+b;
 //在实际实现过程中 函数参数名称可以跟定义时候不一样 而且不需要指定类型

 //对象
 let obj: object ={x:1,y:2}
 //obj.x =3 会报错
//  需要 let obj :{x:number, y:number}={x:1, y:2}

//symbol
let s1: Symbol =Symbol()
let s2 = Symbol()
console.log(s1===s2)

//undefined,null
let un:undefined = undefined
let nu:null = null
// num =undefined
// num= null
// strictNullChecks :false 设置tsconfig 或者 num 加上多个类型 number | null |undefined

//void
let noReturn=()=>{}

//any 任意赋值 不建议

//nerver 永远不会用返回值
let error=()=>{
    throw new Error('error')
}
//死循环

let endless =()=>{
    while(true){}
}



 