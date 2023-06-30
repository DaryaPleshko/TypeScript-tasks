// У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту

const array8: string[] = ['anna@mail.ru', 'anna@mail.ru', 'dasha@mail.ru', 'dasha@mail.ru', 'stas@mail.ru'];

const getEmail = (array8): string[] => {
    let newArray: string[] = []
    for (let i: number = 0; i < array8.length; i++) {
        if (newArray.includes(array8[i])) {
            newArray.push(array8[i]);
        }
    }
    return newArray;
}
console.log(getEmail(array8));