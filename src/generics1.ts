interface Length{
    length:number
}

function log<T extends Length>(value:T):T{
    console.log(value,value.length)
    return value
}
