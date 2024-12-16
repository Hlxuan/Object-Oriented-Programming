const rectangle = {
  name: "矩形 1",
  width: 10,
  height: 20,
  area: function () {
    return this.width * this.height
  },
}

console.log(rectangle.name) // 输出：矩形 1

console.log(rectangle.area()) // 输出：200

rectangle.width = 15
console.log(rectangle.area()) // 输出：300

const rectangle1 = {
  name: "矩形 1",
  width: 10,
  height: 20,
  area: function () {
    return this.width * this.height
  },
}
const rectangle2 = {
  name: "矩形 2",
  width: 30,
  height: 40,
  area: function () {
    return this.width * this.height
  },
}
console.log(rectangle1.area()) // 输出：200
console.log(rectangle2.area()) // 输出：1200
