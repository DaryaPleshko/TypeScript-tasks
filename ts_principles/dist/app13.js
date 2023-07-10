// Реализуйте класс ServerPost. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая: middleware -> controller -> service -> repository, где:
// Задание:
// на вход подается JSON вида: `{ "email": "Test", "pws": "test" }`
// Необходимо добавить в массив БД объект только в том случае, если нет
// совпадений по email.
class ServerPost {
    controller(obj) {
        try {
            return this.service(obj);
        }
        catch (error) {
            return error.message;
        }
    }
    service(obj) {
        return this.repository(obj);
    }
    repository(obj) {
        const array = [{ 'email': 'dasha@mail.ru', 'pwd': '12345678' }];
        const filtered = array.filter((el) => el.email == obj.email);
        if (filtered.length > 0) {
            throw new Error('Такой email уже существует');
        }
        else {
            array.push(obj);
            return array;
        }
    }
}
const obj = JSON.parse(`{ "email": "Test", "pwd": "test" }`);
const serverPost = new ServerPost();
console.log(serverPost.controller(obj));
