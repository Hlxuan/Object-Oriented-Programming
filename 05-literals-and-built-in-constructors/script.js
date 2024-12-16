const strLit = "Hello"

const strObj = new String("Hello")

console.log(strLit, typeof strLit)
console.log(strObj, typeof strObj)

console.log(strLit.toUpperCase())

console.log(strObj.valueOf(), typeof strObj.valueOf())

console.log(strLit.constructor)
console.log(Object.getPrototypeOf(strObj))

console.log(strLit instanceof String)
console.log(strObj instanceof String)

const numLit = 42 // 数字字面量
const numObj = new Number(42) // 数字对象
console.log(numLit, typeof numLit) // 输出：42 number
console.log(numObj, typeof numObj) // 输出：[Number: 42] object
