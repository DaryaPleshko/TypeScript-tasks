// Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.

const array1: number[] = [1, 2, 3, 4, 5, 6, 7];

const newArray1: number[] = array1.filter((el, index) => (index % 2 !== 0) ? true : false);

const result1: number = newArray1.reduce((sum, el) => sum + el, 0);

console.log(result1);