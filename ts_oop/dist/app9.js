// Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
// getCircumference() (вычисление длины окружности). Создайте экземпляр класса
// CircleC и выведите длину окружности. Длина окружности: 2 * π * r
class CircleC {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    getCircumfence() {
        return 2 * 3.14 * this.radius;
    }
}
const circleC = new CircleC(4);
console.log(circleC.getCircumfence());
