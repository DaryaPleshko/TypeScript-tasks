// Реализуйте класс ServerPost. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая: middleware -> controller -> service -> repository, где:
// Задание:
// на вход подается JSON вида: `{ "email": "Test", "pws": "test" }`
// Необходимо добавить в массив БД объект только в том случае, если нет
// совпадений по email.