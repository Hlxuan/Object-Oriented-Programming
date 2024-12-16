class Circle {
  #radius // 使用新 `#` 语法的私有属性
  constructor(radius) {
    this.#radius = radius // 封装属性
  }
  get area() {
    return Math.PI * this.#radius * this.#radius // 通过 getter 访问面积
  }
}

const circle = new Circle(5)
console.log(circle.area) // 使用 getter 访问面积
