// Создать интерфейс iValidation. Создайте класс Validation с приватными методами
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
// Validation. Конструктор принимает поля email, date, path и инициализирует их как
// поля класса. В каждом методе напишите соответствующую проверку

interface iValidation9 {
    email: string;
    date: string;
    path: string;
}
class Validation9 {
    email: string;
    date: string;
    path: string;

    constructor(email: string, date: string, path: string) {
        this.email = email;
        this.date = date;
        this.path = path;
    }

    private isValidEmail(): string {
        return (!/^[a-z0-9_\.-]+@[a-z]+\.[a-z]{2,3}$/gm.test(this.email)) ? '-' : '+';
    };
    private isValidDate(): string {
        return (!this.date) ? '-' : '+';
    };
    private isValidPath(): string {
        return (!/^[a-z]{4,5}:\/\/[a-z]+\.[a-z]{1,3}$/gm.test(this.path)) ? '-' : '+';
    };
}
const validation9 = new Validation9('dasha@mail.ru', 'Dasha', 'https://google.com');

