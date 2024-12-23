function Rectangle(name, width, height) {
  this.name = name
  this.width = width
  this.height = height
  this.area = function () {
    return this.width * this.height
  }
}

const rect = new Rectangle("Rect", 10, 10)
console.log(rect)

console.log(rect.__proto__)
console.log(rect.__proto__.constructor)

console.log(rect.toString())

const arr = []
console.log(arr.__proto__)

const str = new String("Hello")
console.log(str.__proto__)

const obj = {}
console.log(obj.__proto__)

console.log(Object.getPrototypeOf(rect))
