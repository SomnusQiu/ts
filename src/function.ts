//函数定义
function addf1(x: number, y: number) {
    return x + y
}





//addf1(1,2,3)

function addf5(x: number, y?: number) {
    return y ? x + y : x
}

addf5(1)

function addf6(x: number, y = 0, z: number, q = 1) {
    return x + y + z + q
}

addf6(1, undefined, 3)//必选参数前必须传入，如果不需要得穿undefined

function addf7(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur)
}


//函数重载  java、c++ 名称相同，但是传入参数个数或者 类型不同 会出现函数重载
//ts中 要求先定义一系列名称相同的函数声明
function addf8(...rest: number[]): number;
function addf8(...rest: string[]): string;
function addf8(...rest: any[]): any{
   let  first = rest[0];
   if(typeof first ==='string'){
     return rest.join('')
   }
   if(typeof first ==='number'){
       return rest.reduce((pre,cur)=>pre+cur)
   }
}

