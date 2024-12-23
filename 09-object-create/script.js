const rectanglePrototypes = {
  area: function () {
    return this.width * this.height
  },
  perimeter: function () {
    return 2 * (this.width + this.height)
  },
  isSquare: function () {
    return this.width === this.height
  },
}

function createRectangle(width, height) {
  return Object.create(rectanglePrototypes, {
    width: {
      value: width,
      writable: true,
      enumerable: true,
      configurable: true,
    },
    height: {
      value: height,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  })
}

const rect1 = createRectangle(10, 20)
console.log(rect1)

console.log(rect1.area())
console.log(rect1.perimeter())
console.log(rect1.isSquare())

const rect2 = createRectangle(20, 20)
console.log(rect2.area())
console.log(rect2.isSquare())

console.log(Object.getPrototypeOf(rect1))
