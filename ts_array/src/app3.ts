// Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

const string1: string = prompt();
const obj3 = {};

for (let i: number = 0; i < string1.length; i++) {
    if (!obj3.hasOwnProperty(string1[i])) {
        obj3[string1[i]] = 1;
    } else {
        obj3[string1[i]] += 1;
    }
}
console.log(obj3);

const values: number[] = Object.values(obj3);
console.log(values);

const maxValue: number = Math.max(...values);
console.log(maxValue);

for (let key in obj3) {
    if (obj3[key] == maxValue) {
        console.log(key);
        break;
    }
}