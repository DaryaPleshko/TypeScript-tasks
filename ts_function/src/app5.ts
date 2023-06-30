// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом

interface iShop {
    id: number;
    title: string;
    count: number;
    price: number;
};

const array5: iShop[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];

const getMaxPrice = (array5: iShop[]): number => {
    let value = 0;
    for (let i: number = 0; i < array5.length; i++) {
        if (array5[i].price > value) value = array5[i].price;
    }
    return value;
}

console.log(getMaxPrice(array5));