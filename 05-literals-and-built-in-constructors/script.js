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

const boolLit = true // 布尔字面量
const boolObj = new Boolean(true) // 布尔对象
console.log(boolLit, typeof boolLit) // 输出：true boolean
console.log(boolObj, typeof boolObj) // 输出：[Boolean: true] object

const arrLit = [1, 2, 3] // 数组字面量
const arrObj = new Array(1, 2, 3) // 数组对象
console.log(arrLit, typeof arrLit) // 输出：[1, 2, 3] object
console.log(arrObj, typeof arrObj) // 输出：[1, 2, 3] object

function funcLit(x) {
  return x * x
}
console.log(funcLit(5)) // 输出：25
console.log(typeof funcLit) // 输出：function

const funcObj = new Function("x", "return x * x;")
console.log(funcObj(5)) // 输出：25
console.log(typeof funcObj) // 输出：function

const obj1 = {}
console.log(obj1, typeof obj1) // 输出：{} object
