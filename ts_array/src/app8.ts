// Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...

interface iSum {
    id: number;
    title: string;
    amount: number;
    price: number;
}

const array8: iSum[] = [
    {
        id: 1,
        title: 'часы',
        amount: 3,
        price: 120
    },
    {
        id: 2,
        title: 'телефон',
        amount: 5,
        price: 520
    },
    {
        id: 3,
        title: 'видеокамера',
        amount: 1,
        price: 120
    },
    {
        id: 4,
        title: 'ччасы',
        amount: 2,
        price: 120
    },
];

const result8: number = array8.reduce((sum, elem) => {
    return sum + elem.amount * elem.price
}, 0);

console.log(result8);