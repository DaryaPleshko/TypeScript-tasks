//Напишите программу, которая проверяет, является ли заданная строка
//палиндромом (без учета регистра и пробелов).

const palindrom: string = prompt();
if (palindrom === palindrom.split('').reverse().join('')) {
    console.log('заданная строка палиндромом');
} else {
    console.log('заданная строка не палиндромом');
}           