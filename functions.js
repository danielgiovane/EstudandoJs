// função como propriedade de um objeto
objMult = {
    func: function (num1, num2) {
        let result = num1 * num2
        return result
    }
}

console.log(objMult.func(10, 2))

// função atribuida a uma variavel
let mult = function (a, b) {
    let result = a * b
    return result
}

console.log(mult(10, 2))

// arrow functions
let mult2 = (a, b) => {
  let result =  a * b
  return result
}

console.log(mult2(10, 2))

// retorno direto
let mult3 = (a, b) => a * b

console.log(mult2(10, 2))

  
// função com outra func dentro

function myName(val){
    let name;
    function setName(){
        if (val == 1){
            name = 'thiago'
        }else if(val == 2){
            name = 'pedro'
        }else{
            name = 'nenhum valor definido'
        }

        return name
    }
    console.log(setName())
}

myName(1)