const now = new Date()
console.log(now) // 输出当前日期和时间

function Rectangle(name, width, height) {
  this.name = name // 分配name属性
  this.width = width // 分配width属性
  this.height = height // 分配height属性
}

const rect1 = new Rectangle("矩形 1", 10, 10)
console.log(rect1)

const rect2 = Rectangle("矩形 2", 20, 20)
console.log(rect2)
