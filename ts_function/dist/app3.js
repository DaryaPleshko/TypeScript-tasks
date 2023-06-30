// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3
;
const array3 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
const getProductCount = (array3) => {
    let newArray3 = [];
    for (let i = 0; i < array3.length; i++) {
        if (array3[i].count % 3 == 0)
            newArray3.push(array3[i]);
    }
    return newArray3;
};
console.log(getProductCount(array3));
