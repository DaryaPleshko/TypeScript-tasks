// Создайте класс StringManipulator, который будет иметь методы reverseString,
// isPalindrome, countVowels. Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics
class StringManipulator {
    reverseString(str) {
        return (typeof str === 'string') ? str.split('').reverse().join('') : 'Указан неверный тип данных';
    }
    isPalindrom(str) {
        if (typeof str === 'string') {
            const lowerCaseStr = str.toLowerCase();
            return (lowerCaseStr.split('').reverse().join('') === lowerCaseStr) ? 'Строка палиндром' : 'Строка не палиндром';
        }
    }
    countVowels(str) {
        if (typeof str === 'string') {
            let count = 0;
            for (let i = 0; i < str.length; i++)
                (str[i] === 'a' || str[i] === 'o' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e') ? count++ : null;
            return `Число гласных = ${count}`;
        }
    }
}
const stringManipulator = new StringManipulator();
console.log(stringManipulator.reverseString('Hello World'));
console.log(stringManipulator.isPalindrom('шАлаШ'));
console.log(stringManipulator.countVowels('Hello World'));
