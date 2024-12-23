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
