// function classique

// function foo() {
//     console.log("salut")
// }
// foo()

// fonction fléchée

// const add = (a,b) => {
//     return a+b
// }
// console.log(add(3, 2)) // 5

// ou 
// const add = (a, b) => a + b
// console.log(add(3, 2)) // 5

// const myObj = {
//     foo () {
//      console.log('salut')   
//     }
// }
// myObj.foo() // hello

// const myObj = {
//     foo() {
//         console.log(this)
//     }
// }
// myObj.foo() // retourne la methode de l'objet {foo:f}

// const myObj = {
//     a:'5',
//     foo() {
//         console.log(this.a)
//     }
// }
// myObj.foo() // 5

// const myObj = {
//     a: '5',
//     foo:()=> {
//         console.log(this.a)
//     }
// }
// myObj.foo() // undefined

// const myObj = {
//     a: '5',
//     foo: () => {
//         console.log(this)
//     }
// }
// myObj.foo() // Window {window: Window, self: Window, document: document, name: '', location: Location, …}  retourne l'objet englobant window