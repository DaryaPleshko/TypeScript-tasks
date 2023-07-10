// Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая: controller -> service -> repository, где:
// Задание:
// Необходимо вывести в консоль массив из репозитория

abstract class AbstractServerGetAll {
    abstract contoller(): number[];
    abstract service(): number[];
    abstract repository(): number[];
}
class ServerGetAll {
    contoller(): number[] {
        return this.service();
    }
    service(): number[] {
        return this.repository();
    }
    repository(): number[] {
        const array: number[] = [1, 2, 3, 4, 5]
        return array;
    }
}

const serverGetAll = new ServerGetAll();
console.log(serverGetAll.contoller())