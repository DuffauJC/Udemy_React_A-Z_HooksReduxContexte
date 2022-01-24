// Scope

// function foo() {

//     if (true) {
//         var x = 5 
//         let y = 6 // erreur portée scope ('y' not defined )
//     }

//     let y = 6 // ça marche
//     console.log(x);
//     console.log(y);
// }

// foo()

//////////////////////////////////////////

// Redeclaration

// var x = 5
// var x = 10
// // let x = 10 // x déjà déclarer
// // const x = 10 // x déjà déclarer
// console.log(x) // 10

/////////////////////////////////////////////

// Hoisting 

// foo()
// function foo() {
//     console.log('hello') // ça fonctionne 'hello' affiché
// }


// var x = 10
// console.log(x) // 10


// console.log(x) // undefined
// var x = 10

// let x = 10
// console.log(x) // 10


// console.log(x) // Cannot access 'x' before initialization
// let x = 10

///////////////////////////////////////////

// Global

// var maVarX = 10
// console.log(window) // stocker dans l'objet window

// let maVarX = 10
// console.log(window) // NON stocker dans l'objet window


//////////////////////////////////////

// Différence basique

// let x = 10
// x = 'abc'
// console.log(x) // abc

// const x = 10
// x = 'abc'
// console.log(x) // Uncaught TypeError: Assignment to constant variable

// const x = { a: 5 }
// x.a = 10
// console.log(x) // {a:10} pas de réafectation mémoire (modif seulement du contenu de l'objet)
