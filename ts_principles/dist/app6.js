// Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
// (хначение инициализируется через конструктор класса), методы getAverage,
// getMax, getMin для вычисления среднего значения, максимального и
// минимального элементов массива.
class ArrayAnalyzer {
    array;
    constructor(array) {
        this.array = array;
    }
    getAverage() {
        const result = this.array.reduce((sum, el) => sum + el, 0);
        return result / this.array.length;
    }
    getMax() {
        return Math.max(...this.array);
    }
    getMin() {
        return Math.min(...this.array);
    }
}
const arrayAnalyzer = new ArrayAnalyzer([1, 2, 3, 4, 5, 6, 7]);
console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());
