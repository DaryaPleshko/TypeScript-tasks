// 9. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

const str2: string = prompt();

let sum2 = 0;
for (let i: number = 0; i < str2.length; i++) {
    if (str2[i] == str2[i+1]) {
        sum2+=1;
    }
}
console.log(sum2);