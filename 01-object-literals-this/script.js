class User {
  constructor(name, email) {
    this.name = name // 属性
    this.email = email // 属性
  }
  createProfile() {
    console.log(`${this.name}已创建个人资料。`) // 方法
  }
  logOut() {
    console.log(`${this.name}已登出。`) // 方法
  }
}

// 创建 User 类的实例
const user1 = new User("Alice", "alice@example.com")
const user2 = new User("Bob", "bob@example.com")
const user3 = new User("Charlie", "charlie@example.com")
// 调用实例的方法
user1.createProfile() // 输出: Alice已创建个人资料。
user2.logOut() // 输出: Bob已登出。
