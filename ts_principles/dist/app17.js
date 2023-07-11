// Создайте абстрактный класс MusicalInstrument, представляющий музыкальный
// инструмент. У класса MusicalInstrument должен быть метод play, который будет
// воспроизводить звук инструмента. Создайте классы-наследники Guitar, Piano и
// Drums, которые будут представлять гитару, пианино и ударные соответственно.
// Реализуйте метод play для каждого класса, воспроизводя соответствующий звук
// инструмента. Создайте несколько объектов классов Guitar, Piano и Drums и
// вызовите метод play для каждого инструмента.
class MusicalInstrument {
}
class Guitar extends MusicalInstrument {
    play(sound) {
        return sound;
    }
}
class Piano extends MusicalInstrument {
    play(sound) {
        return sound;
    }
}
class Drums extends MusicalInstrument {
    play(sound) {
        return sound;
    }
}
const guitar = new Guitar();
const piano = new Piano();
const drums = new Drums();
console.log(guitar.play('do'));
console.log(guitar.play('re'));
console.log(guitar.play('mi'));
console.log(guitar.play('fa'));
console.log(guitar.play('so'));
console.log(guitar.play('l'));
