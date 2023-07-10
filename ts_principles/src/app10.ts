// Создать интерфейс iPwd. Создайте класс Pwd. Pwd хранит функцию showPwd,
// которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
// Класс Validation является производным по отношению к базовому, родительскому
// Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
// базового класса и записать в переменную используя метод super. Далее
// дополняем переопределенный метод отображением результата в console

interface iPwd {
    showPwd(): number[] | void;
}

class Pwd implements iPwd{
    showPwd(): number[] | void {
        let pwd: number[] = [];
        for (let i: number = 0; i < 8; i++) pwd.push(Math.floor(Math.random() * 9));
        return pwd;
    }
}

class Validation extends Pwd {
    showPwd(): number[] | void {
        const pwd = super.showPwd();
        console.log(pwd);
    }
}

const validation = new Validation();
validation.showPwd()