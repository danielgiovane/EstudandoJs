// Ele não deixa erros bobos passarem desabecerbidos
// let x = 10
// console.log(x)

// IIFE
(function(win,doc){
    
     'use strict'
     let x = 20
     console.log(x)
     console.log(win)
     console.log(doc)
     console.log(this)
})(window, document)