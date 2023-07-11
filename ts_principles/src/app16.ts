// Создайте базовый класс Person, представляющий человека. У класса Person
// должны быть свойства name и age. Создайте класс Student, наследующийся от
// Person, и добавьте ему свойство averageGrade. Реализуйте методы getName,
// getAge и getAverageGrade в классе Student. Создайте несколько объектов класса
// Student и выведите их данные.

interface iPerson {
    name: string;
    age: number;
    averageGrade: number;
}

class Person {
    name: string;
    age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student16 extends Person implements iPerson {
    averageGrade: number;
    constructor(name, age, averageGrade) {
        super(name, age);
        this.averageGrade = averageGrade;
    }
    getName(): string {
        return `Имя студента - ${this.name}`;
    }
    getAge(): string {
        return `Возраст студента - ${this.age}`;
    }
    getAverageGrade(): string {
        return `Средняя оценка студента - ${this.averageGrade}`;
    }
}

const student16 = new Student16('Dasha', 19, 9);
console.log(student16.getName());
console.log(student16.getAge());
console.log(student16.getAverageGrade());

