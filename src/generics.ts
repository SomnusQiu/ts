function log<T>(value : T):T{
    console.log(value)
    return value
}
//静态成员不能定义泛型

log<string[]>(['a','b'])
log(['a','b'])//ts类型推断

// type Log =<T>(value:T)=>T
// let myLog:Log = log

interface Log<T=string>{
    (value: T):T
}
//在实现的时候必须制定类型
let myLog : Log =log
myLog('1')

//泛型变量与函数的参数等同对待 代表类型不代表值