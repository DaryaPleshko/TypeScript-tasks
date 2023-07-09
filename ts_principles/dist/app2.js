// Создайте абстрактный класс Animal, содержащий абстрактный метод
// makeSound(). Напишите дочерние классы Dog и Cat, которые наследуют Animal и
// реализуют метод makeSound() для издания соответствующего звука. Создайте
// объекты классов Dog и Cat и вызовите их методы makeSound().
class Animal {
}
class Dog extends Animal {
    makeSound() {
        console.log('гав');
    }
}
class Cat extends Animal {
    makeSound() {
        console.log('мяу');
    }
}
const dog = new Dog();
dog.makeSound();
const cat = new Cat();
cat.makeSound();
