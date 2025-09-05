const name = "foo"
const age = 18
function sayHello() {
    console.log("sayHello");
}

// 1.在开发中用的很少
// exports.name = name
// exports.age = age
// exports.sayHello = sayHello

// 2将模块内容导出
// module.exports.name = name
// module.exports.age = age
// module.exports.sayHello = sayHello

// 3.开发中最常见的写法
module.exports = {
    name,
    age,
    sayHello
}





