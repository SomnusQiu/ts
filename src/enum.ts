//数字枚举
enum Role{
    Reporter =1,
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
