;
const array10 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
const n = 3;
const searchBinary = (array10, n) => {
    let startIndex = 0;
    let lastIndex = array10.length - 1;
    for (let i = startIndex; i < lastIndex; i++) {
        let midl = Math.ceil((startIndex + lastIndex) / 2);
        if (n === midl) {
            console.log(`объект найден, ${array10[midl]}`);
            break;
        }
        else if (startIndex > midl) {
            startIndex = midl;
        }
        else {
            lastIndex = midl;
        }
    }
};
searchBinary(array10, n);
