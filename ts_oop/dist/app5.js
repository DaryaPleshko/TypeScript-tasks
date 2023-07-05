// Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь
// class Rectangle {
//     width: number;
//     height: number;
//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
// }
// const rectangle = new Rectangle(2, 5);
// console.log(rectangle.getArea());
class Rectangle {
    getArea(width, height) {
        return width * height;
    }
}
const rectangle = new Rectangle();
console.log(rectangle.getArea(2, 5));
