

// const newArr = []

// for (let i = 0; i < rawArr.length; i++) {
//     if (rawArr[i] > 100) {
//         newArr.push(rawArr[i])
//     }

// }
// console.log(newArr);


// const rawArr = [5, 6, 5889, 52, 415, 120]

// function supArr(arr, fn) {

//     const newArr = []

//     for (let i = 0; i < arr.length; i++) {

//         if (fn(arr[i] )) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// const arrSup100 = supArr(rawArr, (item) => {
//     if (item>100) {
//         return item
//     }
// })
// const arrSup10 = supArr(rawArr, (item) => {
//     if (item > 10) {
//         return item
//     }
// })
// console.log(arrSup100)
// console.log(arrSup10)



////////////////////////////
// avec tableau

// const arr = [1, 2, 3, 4, 5, 6]

// const mapedArr = arr.map(x => x + 10)
// console.log(mapedArr);//(6) [11, 12, 13, 14, 15, 16]

// const filteredArr = arr.filter(num => num > 2)
// console.log(filteredArr);//(4) [3, 4, 5, 6]

// arr.forEach(val => {
//     console.log(val-90);// -89 -88 -87 ....
// })