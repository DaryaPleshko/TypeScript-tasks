// Даны переменные a = 7 и b = 2. Найдите a*b
// const func = (a: number, b: number) => a * b;
// console.log(func(7, 2));
//Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b
var remains = function (a, b) { return a % b; };
console.log(remains(10, 3));
//Напишите программу, которая считывает длины двух катетов в прямоугольном
//треугольнике и выводит его площадь. 
// const func = (fist_katet, second_katet) => ((fist_katet * second_katet) / 2);
// console.log(func(6, 8));
//На вход программе подается число n – количество собачьих лет. Напишите
// программу, которая вычисляет возраст собаки в человеческих годах.
// В течение первых двух лет собачий год равен 10.5 человеческим годам. После
// этого каждый год собаки равен 4 человеческим годам
// const years = (n: number) => {
//     if (n === 1) console.log(`The dog is 10.5 years`);
//     else if (n === 2) console.log(`The dog is 21 years`);
//     else if (n > 2) console.log(`The dog is ${21 + (4 * n)} years`);
// }
// years(4);
//Напишите программу для пересчёта величины временного интервала, заданного
//в минутах, в величину, выраженную в часах и минутах
// const time = (num: number) => {
//     const value = `${num} минут - это ${Math.trunc(num / 60)} час ${num % 60} минут.`
//     return value;
// }
// console.log(time(456));
//Вы вводите значение с клавиатуры. Если значение от 0 до 18 «детство», от 19 до 40
//– молодость, от 41 до 100 – зрелость, в противном случае – некорректный ввод
// const ages = (value: number) => {
//     if (value > 0 && value < 19) console.log(`Детство`);
//     else if (value > 18 && value < 41) console.log(`Молодость`);
//     else if (value > 40 && value < 101) console.log(`Зрелость`);
// }
// ages(56);
