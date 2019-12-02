let number = 10
let auxiliar = " "
let i = 0

// for(let i = 0; i <= number; i++){
//     auxiliar += i 
//     if(i!= number){
//         auxiliar +=  ' - '
//     }
// }
// console.log(auxiliar)

// 
// while(i <= number){
//     auxiliar += i 
//     if(i != number){
//         auxiliar += '-'
//     }
//    i++
// }
// console.log(auxiliar)

do {
    auxiliar += i
    if(i!= number){
        auxiliar += '-'
    }
    i++
} while (i <= number);

console.log(auxiliar)
