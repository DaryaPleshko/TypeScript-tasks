// Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Создайте несколько экземпляров класса Student и
// выведите их свойства.

class Student {
    name: string = 'dasha';
    age: number = 18;
};

const student = new Student();
console.log(student.name);
console.log(student.age);