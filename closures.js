// function f1(name) {
//     var saudacao = `óla ${name}`
//     function f1n(){
//         console.log(saudacao)
//     }
//     return f1n
// }

// const suadar = f1("dan")
// suadar()

const contador = function(num){
    let atual = 1
    let timer = setInterval(() => {
        if(atual == num){
            clearInterval(timer)
        }
        console.log(atual++)
    },1000)
}
contador(5)
