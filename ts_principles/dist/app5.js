// Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
// абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классынаследники "Автомобиль" (Car) и "Мотоцикл" (Motorcycle), которые расширяют
// класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
// особенностями каждого транспортного средства. (седержимое методов:
// console.log)
class Vehicle {
}
class Car extends Vehicle {
    start() {
        console.log('start');
    }
    stop() {
        console.log('stop');
    }
}
class Motorcycle extends Vehicle {
    start() {
        console.log('start');
    }
    stop() {
        console.log('stop');
    }
}
const car = new Car();
car.start();
car.stop();
const motorcycle = new Motorcycle();
motorcycle.start();
motorcycle.stop();
