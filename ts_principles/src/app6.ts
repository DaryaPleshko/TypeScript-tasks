// Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
// (хначение инициализируется через конструктор класса), методы getAverage,
// getMax, getMin для вычисления среднего значения, максимального и
// минимального элементов массива.

interface iArrayAnalyzer {
    array: number[]
    getAverage(): number;
    getMax(): number;
    getMin(): number;       
}

class ArrayAnalyzer implements iArrayAnalyzer {
    array: number[];

    constructor(array: number[]) {
        this.array = array;
    }

    getAverage(): number {
        const result: number = this.array.reduce((sum, el) => sum + el, 0);
        return result / this.array.length
    }

    getMax(): number {
        return Math.max(...this.array);
    }

    getMin(): number {
        return Math.min(...this.array);
    }
}

const arrayAnalyzer = new ArrayAnalyzer([1, 2, 3, 4, 5, 6, 7]);
console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());
