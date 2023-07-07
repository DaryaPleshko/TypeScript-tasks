// Создайте класс Product, который содержит объект product (продукт) с полями и
// price (цена продукта), title (название продукта). Реализуйте метод
// displayProductInfo(), который выводит массив продуктов, где цена > 20. Создайте
// экземпляр класса Product и вызовите метод displayProductInfo().

class Product {
    product = [{ price: 300, title: 'phone' },{ price: 300, title: 'test' },{ price: 300, title: 'test2' }];
    displayProductInfo() {
        return this.product.filter(el => el.price > 20);
    }
}
const product = new Product();
console.log(product.displayProductInfo());