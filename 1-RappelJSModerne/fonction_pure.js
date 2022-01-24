let x = 2

// fonction impure
const add1 = y => x += y
//console.log(add1(2)) //4


// fonction pure
const add2 = (a, b) => a + b
//console.log(add2(2,2)) //4