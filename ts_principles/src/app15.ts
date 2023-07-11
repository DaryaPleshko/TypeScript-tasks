// Создайте класс Cat, представляющий кошку. У класса Cat должны быть приватные
// свойства name, age и color. Реализуйте методы getName, getAge и getColor,
// которые будут возвращать соответствующие свойства. Создайте несколько
// объектов класса Cat и выведите их данные.

interface iCat15 {
    getName(): string;
    getAge(): number;
    getColor(): string;
}
class Cat15 implements iCat15 {
    private name: string = 'barni';
    private age: number = 2;
    private color: string = 'grey';

    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
    getColor(): string {
        return this.color;
    }
}

const cat15 = new Cat15();
console.log(cat15.getName());
console.log(cat15.getAge());
console.log(cat15.getColor());