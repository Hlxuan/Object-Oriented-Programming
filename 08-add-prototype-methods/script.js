function Rectangle(name, width, height) {
  this.name = name
  this.width = width
  this.height = height
}

Rectangle.prototype.area = function () {
  return this.width * this.height
}

// const rect = new Rectangle("Rect", 10, 10)

// console.log(rect.area())

// console.log(rect)
// console.log(Object.getPrototypeOf(rect))

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height)
}
Rectangle.prototype.isSquare = function () {
  return this.width === this.height
}
Rectangle.prototype.changeName = function (newName) {
  this.name = newName
}

const rect = new Rectangle("矩形 1", 10, 10)
console.log(rect.area())
console.log(rect.perimeter())
console.log(rect.isSquare())
rect.changeName("测试矩形")
console.log(rect.name)

const rect2 = new Rectangle("矩形 2", 30, 40)
console.log(rect2.area())
console.log(rect2.perimeter())
console.log(rect2.isSquare())

console.log(Object.getPrototypeOf(rect))
