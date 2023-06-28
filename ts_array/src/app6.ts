// Создайте массив чисел и найдите наибольшую разницу между любыми двумя
// элементами.

const arr17: number[] = [1, 3, 9, 10];
let obj17 = {};

for (let i: number = 0; i < arr17.length; i++) {
    if (i !== 0) {
        obj17[arr17[i] + '-' + arr17[i - 1]] = arr17[i] - arr17[i - 1];
    }
}
console.log(obj17);

const values17: number[] = Object.values(obj17);
console.log(values17);

const maxValue17:number= Math.max(...values17);
console.log(maxValue17);




