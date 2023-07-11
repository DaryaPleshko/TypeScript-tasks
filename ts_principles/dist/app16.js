// Создайте базовый класс Person, представляющий человека. У класса Person
// должны быть свойства name и age. Создайте класс Student, наследующийся от
// Person, и добавьте ему свойство averageGrade. Реализуйте методы getName,
// getAge и getAverageGrade в классе Student. Создайте несколько объектов класса
// Student и выведите их данные.
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student16 extends Person {
    averageGrade;
    constructor(name, age, averageGrade) {
        super(name, age);
        this.averageGrade = averageGrade;
    }
    getName() {
        return `Имя студента - ${this.name}`;
    }
    getAge() {
        return `Возраст студента - ${this.age}`;
    }
    getAverageGrade() {
        return `Средняя оценка студента - ${this.averageGrade}`;
    }
}
const student16 = new Student16('Dasha', 19, 9);
console.log(student16.getName());
console.log(student16.getAge());
console.log(student16.getAverageGrade());
