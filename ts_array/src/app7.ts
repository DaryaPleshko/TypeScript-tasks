// Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)

interface iBook{
    id:number,
    author:string,
    title: string;
}

const array7:iBook[] = [{ id: 1, author: 'Булгаков', title: 'Собачье сердце' }, { id: 2, author: 'Достаевский', title: 'Преступление и наказание' }, { id: 3, author: 'Пушкин', title: 'Сказка о рыбаке и рыбки' }];

const filtered:iBook[] = array7.filter((el:iBook) => el.author === 'Булгаков');

console.log(filtered);