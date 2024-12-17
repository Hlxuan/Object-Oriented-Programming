function Rectangle(name, width, height) {
  this.name = name
  this.width = width
  this.height = height
  this.area = function () {
    return this.width * this.height
  }
}

const rect1 = new Rectangle("矩形 1", 20, 20)
const rect2 = new Rectangle("矩形 2", 30, 20)

console.log(rect1.name)
console.log(rect2.width)

console.log(rect1["width"])
