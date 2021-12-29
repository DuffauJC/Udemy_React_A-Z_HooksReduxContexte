// Spread operator

// const arr = [1, 2, 3]
// const arr2 = [...arr, 4]

// console.log(arr) // (3) [1, 2, 3] 
// console.log(...arr) // 1 2 3 étend les données du tableau
// console.log(arr2) // (4) [1, 2, 3, 4]

// const myObj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// const myobj2 = {
//     ...myObj,
//     d: 4
// }
// console.log(myobj2) //{a: 1, b: 2, c: 3, d: 4}



// Rest operator   reste des arguments

// function add(a,b,...args) {
//     console.log(args) // (2) [4, 5, 6] considère les argument à partir du 'rest' soit après les 2 premiers dans l'exemple.
// }
// console.log(add(3,2,4,5,6)) // undefined


// function add(...args) {
//     console.log(args) // (5) [3, 2, 20, 50, 100]

//     let result = 0

//     for (const arg of args) {
//         result += arg // additionne l'argument à la somme des autres
//     }
//     return result
// }
// console.log(add(3, 2, 20, 50, 100)) // 175