// Создайте абстрактный класс University, который содержит абстрактный метод
// getStudentById и поле students – массив объектов. Student – класс наследник,
// реализующий абстрактный метод getStudentById.

interface iStudents {
    id: number;
    name: string
}
abstract class University {
    abstract students: iStudents[];
    abstract getStudentsById(id: number);
}
class Student extends University {
    students: iStudents[] = [{ id: 1, name: 'dasha' }, { id: 2, name: 'hanna' }, { id: 3, name: 'daniil' }, { id: 4, name: 'stas' }];

    getStudentsById(id: number) {
        const filtered = this.students.filter((el: iStudents) => el.id === id);
        return filtered;
    }
}

const students = new Student();
console.log(students.getStudentsById(1));
