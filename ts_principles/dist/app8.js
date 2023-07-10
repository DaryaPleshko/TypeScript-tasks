// Создайте класс PasswordGenerator, который будет иметь метод generatePassword,
// позволяющий генерировать случайные безопасные пароли заданной длины.
// Метод generatePassword принимает в качестве параметра длину пароля.
// Использовать Generics
class PasswordGenerator {
    generatePassword(value) {
        if (typeof value === 'number') {
            let pwd = '';
            let symbols = '';
            for (let i = 0; i < value; i++)
                pwd += symbols.charAt(Math.floor(Math.random() * symbols.length));
            return pwd;
        }
        ;
    }
    ;
}
;
const passwordGenerator = new PasswordGenerator();
console.log(passwordGenerator.generatePassword(10));
