// Реализуйте класс ServerPost. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая: middleware -> controller -> service -> repository, где:
// Задание:
// на вход подается JSON вида: `{ "email": "Test", "pws": "test" }`
// Необходимо добавить в массив БД объект только в том случае, если нет
// совпадений по email.

interface iArray {
    email: string;
    pwd: string;
}
class ServerPost {
    controller(obj: iArray) {
        try {
            return this.service(obj);
        } catch (error) {
            return error.message;
        }
    }
    service(obj: iArray) {
        return this.repository(obj);
    }
    repository(obj: iArray) {
        const array: iArray[] = [{ 'email': 'dasha@mail.ru', 'pwd': '12345678' }];
        const filtered: iArray[] = array.filter((el: iArray) => el.email == obj.email);
        if (filtered.length > 0) {
            throw new Error('Такой email уже существует');
        } else {
            array.push(obj);
            return array;
        }
    }
}

const obj = JSON.parse(`{ "email": "Test", "pwd": "test" }`);

const serverPost = new ServerPost();
console.log(serverPost.controller(obj));
