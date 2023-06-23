//Создайте переменную grade и присвойте ей значение от 1 до 5. Используя
//оператор switch, выведите в консоль описание оценки (например, "Отлично",
//"Хорошо" и т.д.) в зависимости от значения переменной grade.

const grade: number = +prompt();

switch (grade) {
    case 1:
        console.log('very bad');
        break;
    case 2:
        console.log('bad');
        break;
    case 3:
        console.log('normal');
        break;
    case 4:
        console.log('good');
        break;
    case 5:
        console.log('very good');
        break;
    default:
        console.log('invalid value');
        break;
}
