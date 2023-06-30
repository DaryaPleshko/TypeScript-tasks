// . Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.

interface iPersonnel {
    id: number;
    name: string;
    salary: number;
}

const array9: iPersonnel[] = [{ id: 1, name: 'Dasha', salary: 123 }, { id: 2, name: 'Hanna', salary: 928 }, { id: 3, name: 'Danik', salary: 9882 }];

const result9 = array9.reduce((sum, elem) => {
    return sum + elem.salary;
}, 0);

console.log(result9 / array9.length);