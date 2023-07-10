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
    private name: string;
    private age: number;
    private color: string;

    getName(): string {
        return ''
    }
    getAge(): number {
        return 1;
    }
    getColor(): string {
        return ''
    }
}

const cat15 = new Cat15();
