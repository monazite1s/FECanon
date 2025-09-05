// 1.导入node提供的核心模块
// const path = require("path")
// const http = require("http")
// console.log(path,http);


// 2.查找文件或目录
// const utils = require("./utils")

// 3.既不是路径也不是内置模块，会报错

// 但是如果在当前文件夹新建node_modules文件夹，新建why文件夹，新建index.js，就可以查找到了
// 不写index文件也会报错
const why = require("why")
console.log(why);