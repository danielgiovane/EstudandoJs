// maneira formal de usar o object
let person = new Object()
person.name = 'thigo'
person.idade = 12

console.log(person)

// forma literal de usar object

let person1 = {
    name: 'daniel',
    idade: 25
}

console.log(person1)

let person2 = {
    name: 'daniel',
    age: 10,
    status: false,
    array:[1,2,3,45],
    func:function(){
        alert("oi")
    },
    suport:person1
}

// formas de usar o object
let {name,array,func} = person2

// formas de usar o object
function imprimirPeson({name,age,func,status,array}){
    console.log(name,age,func,status,array)
}

console.log(imprimirPeson(person2))