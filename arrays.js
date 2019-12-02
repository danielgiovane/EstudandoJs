// Formal

let myArray = new Array()
myArray = ["daniel",123]

// Literal

let novoArray = ["daniel", 243, {name: 'gabriel'}, {func:function(name){
    return name + 'lindo'
}}]


// arrays part I

let array1 = [1,2,3,4]
let arra2 = ["a","b","c"]
let arrayNovo = []

arrayNovo = array1.concat(arra2)

// every

let everyX = arrayNovo.every(function verifyElements(elem,indice,obj){
    return (typeof elem == "number")
})

// filter 

let filterX = arrayNovo.filter(function verifyElements(elem,indice,obj){
    return (typeof elem == "string")
})

// forEach

let data = " "
let forEachX = arrayNovo.forEach(function verify(elem,indice,obj){
     return data += "indice " + indice + " : " + elem + "\n"
})

// indexOf
// se nao encontrar retorna -1
let indexOfX = arrayNovo.indexOf(3)

// latIndexOf
let latIndexOfX = arrayNovo.lastIndexOf("c")

// join

let joinX = arrayNovo.join(" - ")

// map e push
let mapFinal = []
let mapX = arrayNovo.map(function verify(ele,ind,obj){
    if(typeof elem == "number" ){
     mapFinal.push(ele * 2)
    }else{
        mapFinal.push(ele)
    }
})

// pop
mapFinal.pop()

//some 
// retorna true ou false
let someX = arrayNovo.some(function(elem,ind,obj){
        return elem == 3
})

// reverse
// muda o array original e gera outro
// let reverseX = arrayNovo.reverse()

// array parte II

let reduceX = arrayNovo.reduce(function verify(acumulador,array){
    return acumulador += array
},0)


// shift
// retira o primeiro valor do vetor
// let shiftX = arrayNovo.shift()

// slice
// let sliceX = arrayNovo.slice(2,4)

//sort
let sortX = arrayNovo.sort()

//splice
// let spliceX = arrayNovo.splice(3,3, //'a',2,'b' esses valores são acrescentados )

//unShift
// ao contrario do shift ele acrecsenta valores na frente do array
// let unShiftX = arrayNovo.unshift(20,-1)

// toString
let toStringX = arrayNovo.toString()

console.log(arrayNovo)
console.log(toStringX)
