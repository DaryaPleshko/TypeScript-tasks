// Создайте класс Counter, который будет представлять счетчик. У класса Counter
// должно быть свойство count (первоначальное значение задается сеттером) и
// методы increment и decrement, которые будут увеличивать и уменьшать значение
// счетчика соответственно на 1. Создайте объект класса Counter и проверьте работу
// методов.

class Counter {
    count: number;
    setCount(count: number) {
        this.count = count;
    }
    getCount() {
        return this.count;
    }
    increment() {
        return this.count++
    }
    decrement() {
        return this.count--
    }
}

const counter = new Counter();
counter.setCount(5);
console.log(counter.getCount());
console.log(counter.decrement());
console.log(counter.increment());
