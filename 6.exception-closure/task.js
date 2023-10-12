function parseCount(n) {
  n = Number.parseFloat(n);
  if (isNaN(n)) {
    throw new Error("Невалидное значение");
  }
  return n;
}

function validateCount(n) {
  try {
    n = parseCount(n);
  } catch (e) {
    return e;
  }
  return n;
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || b + c < a || c + a < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return Math.round((this.a + this.b + this.c) * 1000) / 1000;
  }

  get area() {
    let p = this.perimeter / 2;
    let s = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;
    return Math.round(s * 1000) / 1000;
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (e) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
