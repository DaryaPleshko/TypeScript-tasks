// Создайте абстрактный класс Animal, содержащий абстрактный метод
// makeSound(). Напишите дочерние классы Dog и Cat, которые наследуют Animal и
// реализуют метод makeSound() для издания соответствующего звука. Создайте
// объекты классов Dog и Cat и вызовите их методы makeSound().

abstract class Animal{
    abstract makeSound():void;
}

class Dog extends Animal{
    makeSound(): void {
        console.log('гав');
    }
}

class Cat extends Animal{
    makeSound(): void {
        console.log('мяу');
    }
}

const dog = new Dog();
dog.makeSound();

const cat = new Cat();
cat.makeSound();