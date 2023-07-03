// Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}

interface iStyle {
    name: string;
    value: number;
};

const array9: iStyle[] = [{ name: 'width', value: 10 }, { name: 'height', value: 20 }];

const getObj = (array9: iStyle[]) => {
    let newObj = {};
    for (let i: number = 0; i < array9.length; i++) {
        newObj[array9[i].name] = array9[i].value;
    }
    return newObj;
}