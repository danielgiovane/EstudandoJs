let person = {
    name: 'daniel',
    age: 20,
    cc: 123
}

let operation = {
    sacar: function(saldo,valor){
        return saldo -= valor
    },
    depositar: function(saldo,valor){
        return saldo += valor
    } 
}

let bank = {
    person:person,
    operation: operation,
    saldo: 50
}

let v = 30

console.log(bank.person.name + " portador da conta " + bank.person.cc + " realizou um saque no valor de " + v + " ficando com " + bank.operation.sacar(bank.saldo,v) )

console.log(bank.person.name + " portador da conta " + bank.person.cc + " realizou um Deposito no valor de " + v + " ficando com " + bank.operation.depositar(bank.saldo,v) )