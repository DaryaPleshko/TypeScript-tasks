// Создайте класс PasswordGenerator, который будет иметь метод generatePassword,
// позволяющий генерировать случайные безопасные пароли заданной длины.
// Метод generatePassword принимает в качестве параметра длину пароля.
// Использовать Generics

class PasswordGenerator {
    generatePassword<Num>(value: Num) {
        if (typeof value === 'number') {
            let pwd: string = '';
            let symbols: string = '';
            for (let i: number = 0; i < value; i++)   pwd += symbols.charAt(Math.floor(Math.random() * symbols.length));
            return pwd;
        };
    };
};
const passwordGenerator = new PasswordGenerator();
console.log(passwordGenerator.generatePassword<number>(10));