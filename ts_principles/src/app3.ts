// Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
// Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
// информацию о фрукте, где title = яблоко.

abstract class Fruit {
    abstract array;
}

interface iApple {
    id: number;
    title: string;
    price: number;
}

class Apple extends Fruit {
    array: iApple[] = [{ id: 1, title: 'banana', price: 300 }, { id: 2, title: 'apple', price: 250 }, { id: 1, title: 'strawberry', price: 450 }];
    getAppleInfo(): iApple[] {
        return this.array.filter((el: iApple) => el.title == 'apple');
    }
}

const apple = new Apple();
console.log(apple.getAppleInfo());