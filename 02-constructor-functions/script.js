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

class User {
  sayHello() {
    console.log("你好，我是用户。")
  }
}
class Admin extends User {
  sayHello() {
    console.log("你好，我是管理员。")
  }
}
class Guest extends User {
  sayHello() {
    console.log("你好，我是访客。")
  }
}
const user = new User()
const admin = new Admin()
const guest = new Guest()
user.sayHello() // 输出：你好，我是用户。
admin.sayHello() // 输出：你好，我是管理员。
guest.sayHello() // 输出：你好，我是访客。
