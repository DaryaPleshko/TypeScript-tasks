// 8. Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.

const str: string = prompt();
for (let i: number = 0; i < str.length; i++) {
    if (i % 2 !== 0) {
        console.log(str[i]);
    }
}