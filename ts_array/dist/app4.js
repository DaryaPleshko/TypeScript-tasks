// На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]
const value4 = +prompt('element array');
const array4 = [];
for (let i = 0; i < value4; i++) {
    const val4 = prompt('push array');
    array4.push(val4);
}
const newArray4 = [];
array4.forEach((el) => {
    newArray4.push(`!${el}`);
});
console.log(newArray4);
