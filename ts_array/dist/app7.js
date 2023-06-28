// Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)
const array7 = [{ id: 1, author: 'Булгаков', title: 'Собачье сердце' }, { id: 2, author: 'Достаевский', title: 'Преступление и наказание' }, { id: 3, author: 'Пушкин', title: 'Сказка о рыбаке и рыбки' }];
const filtered = array7.filter((el) => el.author === 'Булгаков');
console.log(filtered);
