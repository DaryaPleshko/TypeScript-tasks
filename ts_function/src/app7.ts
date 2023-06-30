// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением

interface iShop {
    id: number;
    title: string;
    count: number;
    price: number;
};

const array7: iShop[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];

const getMaksProduct = (array7: iShop[]):number => {
    let value7:number = 0;
    for (let i: number = 0; i < array7.length; i++) {
        if (array7[i].count * array7[i].price > value7) {
            value7 = array7[i].count * array7[i].price;
        }
    }
    return value7;
}
console.log(getMaksProduct(array7));