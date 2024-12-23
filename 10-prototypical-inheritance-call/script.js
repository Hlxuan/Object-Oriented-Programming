function Shape(name) {
  this.name = name
}

function Rectangle(name, width, height) {
  Shape.call(this, name)
  this.width = width
  this.height = height
}

function Circle(name, radius) {
  Shape.call(this, name)
  this.radius = radius
}

Rectangle.prototype = Object.create(Shape.prototype)
Circle.prototype = Object.create(Shape.prototype)

Rectangle.prototype.constructor = Rectangle
Circle.prototype.constructor = Circle

Shape.prototype.logName = function () {
  console.log(`
    形状名称：${this.name}`)
}

const rect = new Rectangle("矩形 1", 20, 30)
const circle = new Circle("圆形 1", 15)
// rect.logName()
// circle.logName()

Rectangle.prototype.logName = function () {
  console.log(`矩形
    名称：${this.name}`)
}
rect.logName()
circle.logName()
