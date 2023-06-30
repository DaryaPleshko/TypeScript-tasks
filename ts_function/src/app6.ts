// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов

interface iShop {
    id: number;
    title: string;
    count: number;
    price: number;
};

const array6: iShop[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];

const getAvgProduct = (array6: iShop[]): number => {
    let value6: number = array6.reduce((sum, el) => {
        return sum + el.count;
    }, 0);
    return value6;
}

console.log(getAvgProduct(array6));