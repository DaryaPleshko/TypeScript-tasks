// 7. Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.

const num: number = +prompt();

let factorial = 1;
for (let i: number = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial);