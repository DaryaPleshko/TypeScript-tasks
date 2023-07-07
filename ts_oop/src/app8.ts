// Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод
// getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и
// выведите площадь окружности. Площадь круга: π * r^2

// class CircleR {
//     getArea(radius: number) {
//         return 3.14 * radius ** 2;
//     }
// }
// const circleR = new CircleR();
// console.log(circleR.getArea(5));

class CircleR {
    radius: number;
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return 3.14 * this.radius ** 2;
    }
}

const circleR = new CircleR(4);
console.log(circleR.getArea());
