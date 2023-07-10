// Создайте абстрактный класс University, который содержит абстрактный метод
// getStudentById и поле students – массив объектов. Student – класс наследник,
// реализующий абстрактный метод getStudentById.
class University {
}
class Student extends University {
    students = [{ id: 1, name: 'dasha' }, { id: 2, name: 'hanna' }, { id: 3, name: 'daniil' }, { id: 4, name: 'stas' }];
    getStudentsById(id) {
        const filtered = this.students.filter((el) => el.id === id);
        return filtered;
    }
}
const students = new Student();
console.log(students.getStudentsById(1));
