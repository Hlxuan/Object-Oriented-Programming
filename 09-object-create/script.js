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
