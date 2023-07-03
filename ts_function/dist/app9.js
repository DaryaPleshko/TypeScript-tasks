// Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}
;
const array9 = [{ name: 'width', value: 10 }, { name: 'height', value: 20 }];
const getObj = (array9) => {
    let newObj = {};
    for (let i = 0; i < array9.length; i++) {
        newObj[array9[i].name] = array9[i].value;
    }
    return newObj;
};
