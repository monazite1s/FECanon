// 可以直接获取导出的对象，从对象中获取属性
// const util = require("./util.js")
// console.log(util);
// console.log(util.formCount());
// console.log(util.formatDate());

// 导入对象之后，直接对其进行解构
// const { UTIL_NAME, formCount, formatDate } = require("./util.js")
// console.log(UTIL_NAME);
// console.log(formCount());
// console.log(formatDate());

const bar = require("./bar.js")
console.log(bar.name);
setTimeout(() =>{
    console.log(bar.name);
},3000)