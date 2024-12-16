const strLit = "Hello"

const strObj = new String("Hello")

console.log(strLit, typeof strLit)
console.log(strObj, typeof strObj)

console.log(strLit.toUpperCase())

console.log(strObj.valueOf(), typeof strObj.valueOf())

console.log(strLit.constructor)
console.log(Object.getPrototypeOf(strObj))
