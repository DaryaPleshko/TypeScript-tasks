// Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая: controller -> service -> repository, где:
// Задание:
// Необходимо вывести в консоль массив из репозитория
class AbstractServerGetAll {
}
class ServerGetAll {
    contoller() {
        return this.service();
    }
    service() {
        return this.repository();
    }
    repository() {
        const array = [1, 2, 3, 4, 5];
        return array;
    }
}
const serverGetAll = new ServerGetAll();
console.log(serverGetAll.contoller());
