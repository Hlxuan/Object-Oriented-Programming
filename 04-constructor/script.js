const now = new Date()
console.log(now) // 输出当前日期和时间

function Rectangle(name, width, height) {
  this.name = name // 分配name属性
  this.width = width // 分配width属性
  this.height = height // 分配height属性
  this.area = function () {
    return this.width * this.height
  }
}

const rect1 = new Rectangle("矩形 1", 10, 10)
console.log(rect1.area())

const rect2 = new Rectangle("矩形 2", 20, 10)
const rect3 = new Rectangle("矩形 3", 30, 30)
console.log(rect2.name)
console.log(rect3.area())

console.log(rect1.constructor)
