// Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.
// class Calculator {
//     add(a: number, b: number) {
//         return a + b;
//     }
//     subtract(a: number, b: number) {
//         return a - b;
//     }
//     multiply(a: number, b: number) {
//         return a * b;
//     }
//     divide(a: number, b: number) {
//         return a / b;
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.add(6, 2));
// console.log(calculator.subtract(6, 2));
// console.log(calculator.multiply(6, 2));
// console.log(calculator.divide(6, 2));
class Calculator {
    a;
    b;
    setA(a) {
        this.a = a;
    }
    setB(b) {
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
    subtract() {
        return this.a - this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    divide() {
        return this.a / this.b;
    }
}
const calculator = new Calculator();
calculator.setA(6);
calculator.setB(2);
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());
