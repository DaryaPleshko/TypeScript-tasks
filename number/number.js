// Даны переменные a = 7 и b = 2. Найдите a*b
// const func = (a, b) => a * b;
// console.log(func(7, 2));
//Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b
// const remains = (a, b) => a % b;
// console.log(remains(10, 3));
//Напишите программу, которая считывает длины двух катетов в прямоугольном
//треугольнике и выводит его площадь. 
// const func = (fist_katet, second_katet) => ((fist_katet * second_katet) / 2);
// console.log(func(6, 8));
//На вход программе подается число n – количество собачьих лет. Напишите
// программу, которая вычисляет возраст собаки в человеческих годах.
// В течение первых двух лет собачий год равен 10.5 человеческим годам. После
// этого каждый год собаки равен 4 человеческим годам
// const years = (n) => {
//     if (n === 1) console.log(`The dog is 10.5 years`);
//     else if (n === 2) console.log(`The dog is 21 years`);
//     else if (n > 2) console.log(`The dog is ${21 + (4 * n)} years`);
// }
// years(4);
//Напишите программу для пересчёта величины временного интервала, заданного
//в минутах, в величину, выраженную в часах и минутах
// const time = (number) => {
//     const value = `${number} минут - это ${Math.trunc(number / 60)} час ${number% 60} минут.`
//     return value;
// }
// console.log(time(456));
//Вы вводите значение с клавиатуры. Если значение от 0 до 18 «детство», от 19 до 40
//– молодость, от 41 до 100 – зрелость, в противном случае – некорректный ввод
var ages = function (number) {
    if (number > 0 && number < 19)
        console.log("\u0414\u0435\u0442\u0441\u0442\u0432\u043E");
    else if (number > 18 && number < 41)
        console.log("\u041C\u043E\u043B\u043E\u0434\u043E\u0441\u0442\u044C");
    else if (number > 40 && number < 101)
        console.log("\u0417\u0440\u0435\u043B\u043E\u0441\u0442\u044C");
};
ages(56);
