// Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.

interface iAccount {
    balance: number;
    deposit(salary: number): number;
    withdraw(salary: number): number;
};

class Account implements iAccount {
    balance: number = 0;

    deposit(salary: number): number {
        this.balance += salary;
        return this.balance;
    }

    withdraw(salary: number): number {
        this.balance -= salary;
        return this.balance;
    }
}

const account = new Account();
console.log(account.deposit(10000));
console.log(account.withdraw(500));