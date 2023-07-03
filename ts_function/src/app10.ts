// У вас есть массив объектов вида приведенного в приложении. Пользователь
// вводит значение id: например, 1. Необходимо отобразить в консоль найденный
// объект используя алгоритм бинарного поиска.
interface iShop {
    id: number;
    title: string;
    count: number;
    price: number;
};

const array10: iShop[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];

const n: number = 3;

const searchBinary = (array10: iShop[], n): void => {
    let startIndex = 0;
    let lastIndex = array10.length - 1;
    for (let i = startIndex; i < lastIndex; i++) {
        let midl = Math.ceil((startIndex + lastIndex) / 2);
        if (n === midl) {
            console.log(`объект найден, ${array10[midl]}`);
            break;
        } else if (startIndex > midl) {
            startIndex = midl;
        } else {
            lastIndex = midl;
        }  
    }
}
searchBinary(array10, n);