// Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.
const array16 = [1, 2, 3, 4, 5, 6];
let flag = true;
for (let i = 0; i < array16.length; i++) {
    if (array16[i] < array16[i - 1]) {
        flag = false;
        break;
    }
}
if (flag === true) {
    console.log('возрастающая последовательность');
}
else {
    console.log('не возрастающая последовательность');
}
