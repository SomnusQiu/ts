// let add :(x:number,y:number)=> number

//interdace Add{
//    (x:number,y:number):number
//}

//type 关键字类型别名
type Add = ( x: number, y: number )=> number
let add :Add =(a,b)=> a+b

interface  Lib {
    ():void;
    version:string;
    doSomenting():void;
}

function getLib(){
    let lib:Lib=(()=>{}) as Lib //类型断言
    lib.version='1.0';
    lib.doSomenting =()=>{}
    return lib;
}//这样可以创建多个实例

let lib1 = getLib();
lib1();
lib1.doSomenting();
let lib2 = getLib();




