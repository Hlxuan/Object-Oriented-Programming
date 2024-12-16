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
