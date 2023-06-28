// На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]

const value4: number = +prompt('element array');
const array4: string[] = [];

for (let i: number = 0; i < value4; i++) {
    const val4: string = prompt('push array');
    array4.push(val4);
}

const newArray4: string[] = [];
array4.forEach((el: string) => {
    newArray4.push(`!${el}`);
});
console.log(newArray4);