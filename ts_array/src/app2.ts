// Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

const str: string = prompt();
const obj = {};

for (let i = 0; i < str.length; i++) {
    if (!obj.hasOwnProperty(str[i])) {
        obj[str[i]] = 1;
    } else {
        obj[str[i]] += 1;
    }
}
console.log(obj);