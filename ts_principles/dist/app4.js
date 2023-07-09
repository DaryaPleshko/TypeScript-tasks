// Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.
;
class Account {
    balance = 0;
    deposit(salary) {
        this.balance += salary;
        return this.balance;
    }
    withdraw(salary) {
        this.balance -= salary;
        return this.balance;
    }
}
const account = new Account();
console.log(account.deposit(10000));
console.log(account.withdraw(500));
