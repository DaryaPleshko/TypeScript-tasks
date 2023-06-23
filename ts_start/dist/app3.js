// Создайте переменную password и присвойте ей строковое значение. Если длина
// пароля больше 8 символов, выведите сообщение "Пароль надежный", иначе
// выведите сообщение "Пароль слишком короткий".
var password = prompt();
(password.length > 8) ? console.log('the password is strong') : console.log('the password is unreliable');
