// 7. Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.
var num = +prompt();
var factorial = 1;
for (var i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial);
