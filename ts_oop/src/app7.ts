// Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.

class TodoList {
    tasks = ['проснуться', 'поработать', 'написать код', 'помыть посуду'];
    addTask(newTask) {
        this.tasks.push(newTask);
        return this.tasks.join('');
    }
    removeTask() {
        this.tasks.pop();
        return this.tasks;
    }
    getTasks() {
        return this.tasks;
    }
}

const toDoList = new TodoList();
console.log(toDoList.addTask('приготовить ужин'));
console.log(toDoList.removeTask());
console.log(toDoList.getTasks());